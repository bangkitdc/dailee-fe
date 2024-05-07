import { Email } from "@assets/icons/Email";
import { Lock } from "@assets/icons/Lock";
import { User } from "@assets/icons/User";
import { PrimaryButton } from "@components/shares/Buttons";
import { PrimaryInputText } from "@components/shares/Inputs";
import { IApiBaseRegisterForm } from "@interfaces/auth/register";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBase } from "@apis";
import toast from "react-hot-toast";
import { IApiBaseError } from "@interfaces/api";

const initialRegisterFormData: IApiBaseRegisterForm = {
  username: "",
  email: "",
  password: "",
  confirm_password: ""
};

export const RegisterForm = () => {
  const navigate = useNavigate();

  // Register functionality
  const [registerFormData, setRegisterFormData] = useState<IApiBaseRegisterForm>(initialRegisterFormData);
  const apiBaseError = apiBase().error<IApiBaseError>();

  const handleRegisterFormDataChange = (
    name: keyof IApiBaseRegisterForm,
    value: string
  ) => {
    if (name === "password") {
      if (value === registerFormData.confirm_password) {
        setConfirmPasswordError("");
      } else {
        setConfirmPasswordError("Confirm password doesn't match password");
      }
    }

    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await apiBase().auth().register(
        registerFormData.username,
        registerFormData.email, 
        registerFormData.password,
        registerFormData.confirm_password
      );

      if (res.status === "success") {
        toast.success("Register successful!");
      }
    } catch (error) {
      apiBaseError.set(error);
      toast.error(apiBaseError.getMessage() ?? "Error occured");
    }
  };

  // Confirm password
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const handleConfirmPasswordChange = (value: string) => {
    if (value != registerFormData.password) {
      setConfirmPasswordError("Confirm password doesn't match password");
    } else {
      setConfirmPasswordError("");
    }

    setRegisterFormData({
      ...registerFormData,
      ["confirm_password"]: value,
    });
  };
  
  const confirmPasswordErrors = () => {
    let string;
    if (apiBaseError.getErrors("confirm_password")?.[0].toString()) {
      string = apiBaseError.getErrors("confirm_password")?.[0].toString();
    }

    if (confirmPasswordError === "" && registerFormData.confirm_password === "") {
      return string;
    } else {
      return confirmPasswordError;
    }
  }

  // Animation
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1); // Trick for trigger

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute left-0 w-full h-[70vh] z-10 bg-neutral-0 rounded-t-2xl px-6 py-7 transition-all ease-in-out duration-500 
      ${loading ? "-bottom-full" : "bottom-0"}
      overflow-y-auto`}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-orange-01">Register</h1>
        <div className="flex flex-col gap-6">
          <PrimaryInputText
            id="username"
            placeholder="Username"
            icon={
              <User
                fillClassName="fill-input-icon"
                strokeClassName="stroke-input-icon"
              />
            }
            value={registerFormData.username}
            setValue={(e) =>
              handleRegisterFormDataChange("username", e.target.value)
            }
            error={apiBaseError.getErrors("username")?.[0].toString()}
          />

          <PrimaryInputText
            id="email"
            placeholder="Email"
            icon={
              <Email
                fillClassName="fill-input-icon"
                strokeClassName="stroke-white-01"
              />
            }
            value={registerFormData.email}
            setValue={(e) =>
              handleRegisterFormDataChange("email", e.target.value)
            }
            error={apiBaseError.getErrors("email")?.[0].toString()}
          />

          <PrimaryInputText
            id="password"
            type="password"
            placeholder="Password"
            icon={<Lock fillClassName="fill-input-icon" />}
            value={registerFormData.password}
            setValue={(e) =>
              handleRegisterFormDataChange("password", e.target.value)
            }
            error={apiBaseError.getErrors("password")?.[0].toString()}
          />

          <PrimaryInputText
            id="confirm_password"
            type="password-no-eye"
            placeholder="Confirm Password"
            icon={<Lock fillClassName="fill-input-icon" />}
            value={registerFormData.confirm_password}
            setValue={(e) => handleConfirmPasswordChange(e.target.value)}
            error={confirmPasswordErrors()}
          />
        </div>
        <div className="flex flex-col justify-between gap-12">
          <PrimaryButton
            text="Register"
            className="bg-orange-01 text-neutral-0 py-2.5 mt-3 font-semibold"
            onClick={handleSubmit}
          />

          <div className="text-xs font-normal text-neutral-500 justify-center flex">
            <p>Already have an account?</p>&nbsp;
            <PrimaryButton
              text="Login"
              type="text-only"
              className="text-orange-01 font-semibold"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};