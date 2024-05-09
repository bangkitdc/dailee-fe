import { List } from "@components/privates/Planner/List";
import { BottomNav } from "@components/shares/BottomNav";

export const Planner = () => {
  return (
    <div className="flex flex-col h-screen relative items-stretch">
      <div className="relative h-screen overflow-y-auto overscroll-contain items-stretch bg-yellow-03 bg-logo-blank bg-top bg-no-repeat">
        <List />
      </div>
      <BottomNav screen={"planner"} />
    </div>
  );
};
