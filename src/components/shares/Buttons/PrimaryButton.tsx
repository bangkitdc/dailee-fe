type PrimaryButtonPropType = {
  text?: string
  type?: "default" | "text-only" | "icon-only" | "submit" | "topic" | "disabled"
  icon?: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
};

export const PrimaryButton = ({ 
  text,
  type = "default",
  icon,
  className,
  onClick,
  disabled
}: PrimaryButtonPropType) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      className={`${
        type === "default" ? "px-5 py-2 shadow rounded-full" :
        type === "icon-only" ? "p-2 w-fit flex items-center justify-center" :
        type === "submit" ? "px-5 py-2 shadow rounded-full" :
        type === "topic" ? "bg-green-02 hover:bg-green-03 text-white py-2 px-4 rounded-lg":
        type === "disabled" ? "bg-neutral-300 text-neutral-500 py-2 px-4 border border-neutral-400 rounded-lg opacity-50 cursor-not-allowed":
        ""
      } ${className}`}
    >
      {["default", "submit", "text-only", "topic", "disabled"].includes(type) && <div>{text}</div>}

      {type == "icon-only" && icon}
    </button>
  );
}