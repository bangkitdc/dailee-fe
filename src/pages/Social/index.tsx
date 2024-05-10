import { BottomNav } from "@components/shares/BottomNav";
import { SocialCom } from "@components/privates/Social/SocialCom";
import { TopicButtonList } from "@components/privates/Social/TopicList";

export const Social = () => {
  return (
    <div className="flex flex-col h-screen relative items-stretch">
      <div className="flex flex-col gap-5 overflow-y-auto overscroll-contain pb-[68px]">
        <div className="flex justify-between px-5 pt-4">
          <h1 className="text-[26px]">
            <span className="text-2xl font-bold">Social Community</span>
          </h1>
        </div>
        <div>
          <TopicButtonList />
        </div>
          <SocialCom /> 
      </div>
      <BottomNav screen={"social"} />
    </div>
  );
};
