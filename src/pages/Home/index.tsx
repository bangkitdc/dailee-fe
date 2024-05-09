import { Notification } from "@assets/icons/Notification";
import { Module } from "@components/privates/Home/Module"
import { BottomNav } from "@components/shares/BottomNav"
import { useAuth } from "@contexts";

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-screen relative items-stretch">
      <div className="flex flex-col gap-5 overflow-y-auto overscroll-contain pb-[68px]">
        <div className="flex justify-between px-5 pt-4">
          <h1 className="text-[26px]">
            Good Morning, <span className="block font-semibold">{user?.username}</span>
          </h1>
          <div className="h-fit w-fit p-2 cursor-pointer">
            <Notification strokeClassName="stroke-black-01" />
          </div>
        </div>

        <Module />
      </div>
      <BottomNav screen={"home"} />
    </div>
  );
}