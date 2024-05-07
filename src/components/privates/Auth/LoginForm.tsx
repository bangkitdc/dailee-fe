import { apiBase } from "@apis";
import { Email } from "@assets/icons/Email";
import { Lock } from "@assets/icons/Lock";
import { PrimaryButton } from "@components/shares/Buttons";
import { PrimaryInputText } from "@components/shares/Inputs";
import { useAuth } from "@contexts";
import { IApiBaseError } from "@interfaces/api";
import { IApiBaseLoginForm } from "@interfaces/auth/login";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialLoginFormData: IApiBaseLoginForm = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Login functionality
  const [loginFormData, setLoginFormData] = useState<IApiBaseLoginForm>(initialLoginFormData);
  const apiBaseError = apiBase().error<IApiBaseError>();

  const handleLoginFormDataChange = (
    name: keyof IApiBaseLoginForm,
    value: string
  ) => {
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await login(loginFormData.email, loginFormData.password);

      if (res.status === "success") {
        toast.success("Login successful!");
      }
    } catch (error) {
      apiBaseError.set(error);
      toast.error(apiBaseError.getMessage() ?? "Error occured");
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
      className={`absolute left-0 w-full h-[65vh] z-10 bg-neutral-0 rounded-t-2xl px-6 py-7 transition-all ease-in-out duration-500 
      ${loading ? "-bottom-full" : "bottom-0"}
      overflow-y-auto`}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-orange-01">Login</h1>
        <div className="flex flex-col gap-6">
          <PrimaryInputText
            id="email"
            placeholder="Email"
            icon={
              <Email
                fillClassName="fill-input-icon"
                strokeClassName="stroke-white-01"
              />
            }
            value={loginFormData.email}
            setValue={(e) => handleLoginFormDataChange("email", e.target.value)}
            error={apiBaseError.getErrors("email")?.[0].toString()}
          />

          <div>
            <PrimaryInputText
              id="password"
              type="password"
              placeholder="Password"
              icon={<Lock fillClassName="fill-input-icon" />}
              value={loginFormData.password}
              setValue={(e) =>
                handleLoginFormDataChange("password", e.target.value)
              }
              error={apiBaseError.getErrors("password")?.[0].toString()}
            />

            <PrimaryButton
              text="Forgot the password?"
              type="text-only"
              className="pt-3 pl-1 text-xs text-neutral-500 font-normal"
              onClick={() => console.log()}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-14">
          <PrimaryButton
            text="Login"
            className="bg-orange-01 text-neutral-0 py-2.5 mt-3 font-semibold"
            onClick={handleSubmit}
          />

          <div className="text-xs font-normal text-neutral-500 justify-center flex">
            <p>Don't have an account yet?</p>&nbsp;
            <PrimaryButton
              text="Register"
              type="text-only"
              className="text-orange-01 font-semibold"
              onClick={() => navigate("/register")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
