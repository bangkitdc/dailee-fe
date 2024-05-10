type PrimaryButtonPropType = {
  text?: string
  type?: "default" | "text-only" | "icon-only" | "submit"
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
        ""
      } ${className}`}
    >
      {["default", "submit", "text-only"].includes(type) && <div>{text}</div>}

      {type == "icon-only" && icon}
    </button>
  );
}