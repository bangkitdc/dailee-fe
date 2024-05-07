import { RegisterForm } from "@components/privates/Auth/RegisterForm";

export const Register = () => {
  return (
    <div className="relative h-screen overflow-y-auto overscroll-contain items-stretch bg-yellow-03 bg-logo bg-top bg-no-repeat">
      <RegisterForm />
    </div>
  );
};
