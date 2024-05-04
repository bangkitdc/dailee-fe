import { ChangeEvent, useState } from "react";

type PrimaryInputTextPropType = {
  id: string
  label?: string
  placeholder?: string
  disabled?: boolean
  type?: "text" | "password" | "password-no-eye"
  value: string
  error?: string
  setValue: (event: ChangeEvent<HTMLInputElement>) => void
  button?: React.ReactNode
};

export const PrimaryInputText = ({
  id,
  label,
  placeholder = "",
  disabled = false,
  type = "text",
  value,
  error = "",
  setValue,
  button
}: PrimaryInputTextPropType) => {
  const needEye = type === "password";
  const typeInput = type === "password-no-eye" ? "password" : type;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-base block w-fit text-black-01"
        >
          {label}
        </label>
      )}

      <div className="relative">
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
          className={`rounded-xl shadow-input outline-none w-full box-border px-4 py-2.5 transition-all ease-in-out bg-white-01 text-sm text-neutral-700 ${
            error
              ? "shadow-input-error focus:shadow-input-focus-error"
              : "hover:shadow-input-hover focus:shadow-input-focus"
          }
          ${disabled ? "bg-gray-500" : ""}`}
        />

        {needEye || button && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {needEye && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                {/* <img
                  className="w-5 h-5"
                  src={`${ICONS_DIR}${
                    showPassword ? "eye-open.svg" : "eye-closed.svg"
                  }`}
                  alt="Eye Btn Icon"
                /> */}
              </button>
            )}
            {button && (
              button
            )}
          </div>
        )}
      </div>

      {error && (
        <div className="flex gap-2 items-center">
          {/* <img
            className="w-4 h-4 mb-[1px]"
            src={`${ICONS_DIR}warning.svg`}
            alt="Warning Icon"
          /> */}
          <p className="text-sm font-thin text-clr-text-danger">{error}</p>
        </div>
      )}
    </div>
  );
}
