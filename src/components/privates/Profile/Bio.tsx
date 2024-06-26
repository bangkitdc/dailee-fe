import { apiBase } from "@apis";
import { CaretRight } from "@assets/icons/Caret";
import { Logout } from "@assets/icons/Logout";
import { Profile } from "@assets/icons/Profile";
import { Question } from "@assets/icons/Question";
import { Settings } from "@assets/icons/Settings";
import { Tnc } from "@assets/icons/Tnc";
import { BaseButton } from "@components/shares/Buttons";
import { useAuth } from "@contexts";
import { IApiBaseError } from "@interfaces/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Bio = () => {
  const { user, logout } = useAuth();

  // Logout functionality
  const apiBaseError = apiBase().error<IApiBaseError>();
  const handleLogout = async () => {
    try {
      const res = await logout();

      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (error) {
      apiBaseError.set(error);
      toast.error(apiBaseError.getMessage() ?? "Error occured");
    }
  };

  // Animation
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10); // Trick for trigger

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute left-0 w-full h-screen z-10 transition-all ease-in-out duration-500 
        ${loading ? "-bottom-full" : "bottom-0"}
        `}
    >
      <div className="w-full h-[30vh] flex flex-col gap-3 justify-center items-center text-neutral-600">
        <img
          className="cursor-pointer w-20 drop-shadow-sm"
          src="/images/avatar-default.png"
        />
        <div className="text-center">
          <p className="font-bold text-lg">{user?.username}</p>
          <p className="text-xs">{user?.email}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[70vh] z-10 bg-neutral-0 rounded-t-2xl py-7 overflow-y-auto pb-[68px]">
        <div className="flex flex-col gap-0 *:flex *:justify-between *:px-6 *:py-4 *:border-b">
          <BaseButton>
            <div className="flex flex-row items-center gap-4 justify-center">
              <Profile
                fillClassName="fill-orange-01 w-5 h-[18px]"
                strokeClassName="stroke-orange-01"
              />
              <p className="font-medium text-sm leading-[21px] text-neutral-700">
                Edit Profile
              </p>
            </div>
            <CaretRight strokeClassName="stroke-neutral-700" />
          </BaseButton>

          <BaseButton>
            <div className="flex flex-row items-center gap-4 justify-center">
              <Settings fillClassName="fill-orange-01 w-5" />
              <p className="font-medium text-sm leading-[21px] text-neutral-700">
                Settings
              </p>
            </div>
            <CaretRight strokeClassName="stroke-neutral-700" />
          </BaseButton>

          <BaseButton>
            <div className="flex flex-row items-center gap-4 justify-center">
              <Question fillClassName="fill-orange-01 w-5" />
              <p className="font-medium text-sm leading-[21px] text-neutral-700">
                Help & FAQ
              </p>
            </div>
            <CaretRight strokeClassName="stroke-neutral-700" />
          </BaseButton>

          <BaseButton>
            <div className="flex flex-row items-center gap-4 justify-center">
              <Tnc fillClassName="fill-orange-01 w-5" />
              <p className="font-medium text-sm leading-[21px] text-neutral-700">
                Terms & Conditions
              </p>
            </div>
            <CaretRight strokeClassName="stroke-neutral-700" />
          </BaseButton>

          <BaseButton onClick={handleLogout}>
            <div className="flex flex-row items-center gap-4 justify-center">
              <Logout strokeClassName="stroke-danger w-5" />
              <p className="font-medium text-sm leading-[21px] text-danger">
                Logout
              </p>
            </div>
            <CaretRight strokeClassName="stroke-neutral-700" />
          </BaseButton>
        </div>
      </div>
    </div>
  );
};
