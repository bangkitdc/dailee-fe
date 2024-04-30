import { Link } from "react-router-dom";

type BottomNavPropType = {
  screen: "home" | "planner" | "social" | "profile";
};

export const BottomNav = ({ screen }: BottomNavPropType) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4">
        <Link to={"/"} className="flex justify-center items-center">
          <div className={`${screen == "home" ? "text-red" : "text-black"}`}>
            Home
          </div>
        </Link>
        <Link to={"/"} className="flex justify-center items-center">
          <div className={`${screen == "planner" ? "text-red" : "text-black"}`}>
            Planner
          </div>
        </Link>
        <Link to={"/"} className="flex justify-center items-center">
          <div className={`${screen == "social" ? "text-red" : "text-black"}`}>
            Social
          </div>
        </Link>
        <Link to={"/"} className="flex justify-center items-center">
          <div className={`${screen == "profile" ? "text-red" : "text-black"}`}>
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};
