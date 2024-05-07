import React, { useEffect, useState } from "react";
import { AuthContext, useApi } from "@contexts";
import { IApiBaseUserSelf } from "@interfaces/user";
import { useNavigate } from "react-router-dom";
import { Loading } from "@components/shares/Layouts";
import { apiBase } from "@apis";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { setToken } = useApi();

  const [user, setUser] = useState<IApiBaseUserSelf | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const self = async () => {
    const res = await apiBase().user().self();

    if (res.status === "success") {
      setUser(res.data);
    }
  };

  const login = async (email: string, password: string) => {
    const res = await apiBase().auth().login(email, password);

    if (res.status === "success") {
      // Set token to header
      setToken(res.data.token);
      setUser(res.data.user);
      navigate("/");
    }

    return res;
  };

  // const register = async (
  //   username: string,
  //   email: string,
  //   password: string
  // ) => {
  //   const res = await apiBase().auth().register(username, email, password);

  //   if (res.status === "success") {
  //     navigate("/login");
  //   }
  // };

  // const logout = async () => {
  //   const res = await apiBase().auth().logout();

  //   if (res.status === "success") {
  //     setToken(null);
  //     setUser(null);
  //     navigate("/login");
  //   }
  // };

  useEffect(() => {
    setIsLoading(true);

    const delay = setTimeout(async () => {
      try {
        await self();
      } catch (error) {
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(delay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login
      }}
    >
      {isLoading ? <div className="h-screen"></div> : children}
      <Loading isLoading={isLoading} /> 
    </AuthContext.Provider>
  );
};
