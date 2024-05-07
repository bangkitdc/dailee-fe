import { BottomNav } from "@components/shares/BottomNav";

export const Social = () => {
  return (
    <div className="flex flex-col h-screen relative items-stretch">
      <div className="flex flex-col gap-5 overflow-y-auto overscroll-contain pb-[68px]">
        <div className="flex justify-between px-5 pt-4">
          <h1 className="text-[26px]">
            Social, <span className="block font-semibold">Uhuy!</span>
          </h1>
        </div>
      </div>
      <BottomNav screen={"social"} />
    </div>
  );
};
