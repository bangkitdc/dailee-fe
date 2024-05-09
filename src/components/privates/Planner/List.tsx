import { apiBase } from "@apis";
import { Adjustment } from "@assets/icons/Adjustment";
import { BaseButton, PrimaryButton } from "@components/shares/Buttons";
import { useAuth } from "@contexts";
import { IApiBaseError } from "@interfaces/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DateCard } from "./DateCard";
import { PrimaryModal } from "@components/shares/Modals";
import { closestCorners, DndContext, DragEndEvent, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DndCard } from "@components/shares/DndCards";
import { IApiBaseTaskCategory } from "@interfaces/taskCategory";

export const List = () => {
  const { user } = useAuth();

  // Modal
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Date
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  const apiBaseError = apiBase().error<IApiBaseError>();

  // Animation
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10); // Trick for trigger

    return () => clearTimeout(timeout);
  }, []);

  // Task categories
  const [taskCategories, setTaskCategories] = useState<IApiBaseTaskCategory[]>(
    []
  );
  const fetchTaskCategories = async () => {
    try {
      const res = await apiBase().taskCategory().getTaskCategories();

      if (res.status === "success") {
        // Set task categories data
        setTaskCategories(res.data);
      }
    } catch (error) {
      apiBaseError.set(error);
      toast.error(apiBaseError.getMessage() ?? "Error occured");
    }
  };

  useEffect(() => {
    fetchTaskCategories();
  }, []);

  // Drag and drop
  const sortableItems = taskCategories.map((category) => ({
    id: category.task_category_id,
    ...category,
  }));

  const getTaskCategoryPos = (id: number) =>
    taskCategories.findIndex((task) => {
      return task.task_category_id === id;
    });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      if (active.id.toString() === over.id.toString()) return;

      setTaskCategories((categories) => {
        const originalPos = getTaskCategoryPos(parseInt(active.id.toString()));
        const newPos = getTaskCategoryPos(parseInt(over.id.toString()));

        return arrayMove(categories, originalPos, newPos);
      });
    }
  };

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  return (
    <>
      <PrimaryModal open={modalOpen} setOpen={setModalOpen}>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold text-neutral-600">
            Modify Task Preference
          </h1>
          <p className="text-xs text-neutral-500 pr-7">
            Arrange your task categories from most to least liked.
          </p>
          <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
            sensors={sensors}
          >
            <div className="flex-grow">
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col gap-3 w-full">
                  <SortableContext
                    items={sortableItems}
                    strategy={verticalListSortingStrategy}
                  >
                    {taskCategories.map((category) => (
                      <DndCard
                        key={category.task_category_id}
                        taskCategory={category}
                        buttonClassName="border-neutral-400 text-xs py-2"
                        iconClassName="fill-neutral-400"
                      />
                    ))}
                  </SortableContext>
                </div>
              </div>
            </div>
          </DndContext>
        </div>
      </PrimaryModal>
      <div
        className={`absolute left-0 w-full h-screen z-10 transition-all ease-in-out duration-500 
        ${loading ? "-bottom-full" : "bottom-0"}
        `}
      >
        <div className="fixed top-0 w-full max-w-[430px] h-[25vh] flex flex-col gap-3 text-neutral-700 p-5">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">Daily Planner</h1>
            <PrimaryButton
              type="icon-only"
              icon={<Adjustment fillClassName="fill-neutral-700" />}
              onClick={() => setModalOpen(true)}
            />
          </div>
          <div className="flex-grow grid grid-cols-7 gap-3 items-center justify-center">
            {dates.map((date, index) => (
              <BaseButton key={index} onClick={() => setSelectedDate(date)}>
                <DateCard date={date} selectedDate={selectedDate} />
              </BaseButton>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[75vh] z-10 bg-neutral-0 rounded-t-2xl px-7 py-10 overflow-y-auto"></div>
      </div>
    </>
  );
};
