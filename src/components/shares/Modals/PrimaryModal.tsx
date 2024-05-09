import { useEffect } from "react";
import { PrimaryButton } from "../Buttons";
import { Close } from "@assets/icons/Close";

type PrimaryModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const PrimaryModal = ({
  open,
  setOpen,
  children
}: PrimaryModalProps) => {
  useEffect(() => {
    if (open) {
      // Disable scrolling on the body when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the body when modal is closed
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`top-0 left-0 absolute w-full h-screen overflow-y-auto z-50 px-6 ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        className="bg-opacity-50 backdrop-blur-[2px] absolute top-0 left-0 w-full h-full z-0"
        onClick={() => setOpen(false)}
      ></div>
      <div className="flex justify-center items-center h-full">
        <div className="relative bg-white p-6 rounded-2xl shadow-sm w-full z-30">
          {children}
          <PrimaryButton
            type="icon-only"
            className="absolute top-0 right-0 mt-6 mr-6 p-1"
            icon={<Close fillClassName="fill-neutral-600" />}
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
