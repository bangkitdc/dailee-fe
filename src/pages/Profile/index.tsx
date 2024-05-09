import { Bio } from "@components/privates/Profile/Bio";
import { BottomNav } from "@components/shares/BottomNav";

export const Profile = () => {
  return (
    <div className="flex flex-col h-screen relative items-stretch">
      <div className="relative h-screen overflow-y-auto overscroll-contain items-stretch bg-yellow-03 bg-logo-blank bg-top bg-no-repeat">
        <Bio />
      </div>
      <BottomNav screen={"profile"} />
    </div>
  );
};
