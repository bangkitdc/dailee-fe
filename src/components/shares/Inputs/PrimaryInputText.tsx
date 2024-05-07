import { Error } from "@assets/icons/Error";
import { EyeClosed, EyeOpened } from "@assets/icons/Eye";
import { ChangeEvent, useState } from "react";

type PrimaryInputTextPropType = {
  id: string;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "password" | "password-no-eye";
  value: string;
  error?: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  button?: React.ReactNode;
  icon?: React.ReactNode;
};

export const PrimaryInputText = ({
  id,
  placeholder = "",
  disabled = false,
  type = "text",
  value,
  error = "",
  setValue,
  button,
  icon
}: PrimaryInputTextPropType) => {
  const needEye = type === "password";
  const typeInput = type === "password-no-eye" ? "password" : type;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={
            typeInput === "password"
              ? showPassword
                ? "text"
                : "password"
              : typeInput
          }
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          disabled={disabled}
          className={`rounded-xl shadow-input outline-none w-full box-border px-3 py-3 transition-all ease-in-out bg-white-01 text-sm text-neutral-700 ${
            error
              ? "shadow-input-error focus:shadow-input-focus-error"
              : "hover:shadow-input-hover focus:shadow-input-focus"
          }
          ${icon ? "pl-12" : ""}
          ${disabled ? "bg-gray-500" : ""}`}
        />

        {(needEye || button) && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            {needEye && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOpened fillClassName="fill-input-icon" />
                ) : (
                  <EyeClosed fillClassName="fill-input-icon" />
                )}
              </button>
            )}
            {button && button}
          </div>
        )}
      </div>

      {error && (
        <div className="flex gap-2 items-center">
          <div className="w-3.5">
            <Error fillClassName="w-3.5 fill-indicator-error mb-[1px]" />
          </div>
          <p className="text-xs font-normal text-indicator-error">{error}</p>
        </div>
      )}
    </div>
  );
}
