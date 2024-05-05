import { Logo } from "@/assets/icons/Logo";
import { useEffect, useState } from "react";

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute bottom-0 left-0 w-full h-full bg-white z-60 flex items-center justify-center transition-all ease-in-out duration-500 ${
        loading ? "top-0" : "-top-full"
      }`}
    >
      <div className="w-fit animate-popUp">
        <Logo />
      </div>
    </div>
  );
};
