import { LoginForm } from "@components/privates/Auth/LoginForm";

export const Login = () => {
  return (
    <div className="relative h-screen overflow-y-auto overscroll-contain items-stretch bg-yellow-03 bg-logo bg-top bg-no-repeat">
      <LoginForm />
    </div>
  );
}