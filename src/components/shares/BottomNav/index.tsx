import { Home } from "@/assets/icons/Home";
import { Planner } from "@/assets/icons/Planner";
import { Profile } from "@/assets/icons/Profile";
import { Social } from "@/assets/icons/Social";
import { Link } from "react-router-dom";

type BottomNavPropType = {
  screen: "home" | "planner" | "social" | "profile";
};

export const BottomNav = ({ screen }: BottomNavPropType) => {
  return (
    <div className="w-full absolute bottom-0 bg-white border-t border-t-white-02">
      <div className="grid grid-cols-4">
        <Link
          to={"/"}
          className="flex flex-col gap-1 text-xs justify-center items-center py-3 font-medium"
        >
          <Home
            fillClassName={
              screen === "home" ? "fill-orange-01" : "fill-white-01"
            }
            strokeClassName={
              screen === "home" ? "stroke-orange-01" : "stroke-shade-03"
            }
          />
          <div
            className={`${
              screen == "home" ? "text-orange-01" : "text-shade-03"
            }`}
          >
            Home
          </div>
        </Link>
        <Link
          to={"/planner"}
          className="flex flex-col gap-1 text-xs justify-center items-center py-3 font-medium"
        >
          <Planner
            fillClassName={
              screen === "planner" ? "fill-orange-01" : "fill-white-01"
            }
            strokeClassName={
              screen === "planner" ? "stroke-orange-01" : "stroke-shade-03"
            }
            dotClassName={
              screen === "planner" ? "stroke-white-01" : "stroke-shade-03"
            }
          />
          <div
            className={`${
              screen == "planner" ? "text-orange-01" : "text-shade-03"
            }`}
          >
            Planner
          </div>
        </Link>
        <Link
          to={"/social"}
          className="flex flex-col gap-1 text-xs justify-center items-center py-3 font-medium"
        >
          <Social
            fillClassName={
              screen === "social" ? "fill-orange-01" : "fill-white-01"
            }
            strokeClassName={
              screen === "social" ? "stroke-orange-01" : "stroke-shade-03"
            }
            dotClassName={
              screen === "social" ? "stroke-white-01" : "stroke-shade-03"
            }
          />
          <div
            className={`${
              screen == "social" ? "text-orange-01" : "text-shade-03"
            }`}
          >
            Social
          </div>
        </Link>
        <Link
          to={"/profile"}
          className="flex flex-col gap-1 text-xs justify-center items-center py-3 font-medium"
        >
          <Profile
            fillClassName={
              screen === "profile" ? "fill-orange-01" : "fill-white-01"
            }
            strokeClassName={
              screen === "profile" ? "stroke-orange-01" : "stroke-shade-03"
            }
          />
          <div
            className={`${
              screen == "profile" ? "text-orange-01" : "text-shade-03"
            }`}
          >
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};
