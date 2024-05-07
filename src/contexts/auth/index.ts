
import { IApiBaseResponse } from "@interfaces/api";
import { IApiBaseAuthContext } from "@interfaces/auth";
import { IApiBaseAuthLogin } from "@interfaces/auth/login";
import { createContext, useContext } from "react";

const context = createContext<IApiBaseAuthContext>({
  user: null,

  login: async () => {
    const loginResponse: IApiBaseResponse<IApiBaseAuthLogin> = {
      data: {
        user: {
          user_id: -1,
          username: "",
          email: "",
        },
        token: ""
      },
      status: "success",
      message: 'Login successful',
    };

    return Promise.resolve(loginResponse);
  },

  // register: async () => {
  //   return undefined;
  // },

  // logout: async () => {
  //   return undefined;
  // }
});

export default context;

export const useAuth = () => {
  return useContext(context);
}