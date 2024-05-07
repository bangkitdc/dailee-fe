type PrimaryButtonPropType = {
  text?: string
  type?: "default" | "text-only" | "icon-only"
  icon?: React.ReactNode
  className?: string
  onClick: () => void
};

export const PrimaryButton = ({ 
  text,
  type = "default",
  icon,
  className,
  onClick
}: PrimaryButtonPropType) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type === "default" ? "px-5 py-2 shadow rounded-full" :
        type === "icon-only" ? "p-2 w-fit flex items-center justify-center" :
        ""
      } ${className}`}
    >
      {["default", "text-only"].includes(type) && <div>{text}</div>}

      {type == "icon-only" && icon}
    </button>
  );
}