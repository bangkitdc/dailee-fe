import { IApiBaseResponse } from "@interfaces/api";
import { IApiBaseUserSelf } from "@interfaces/user";
import { IApiBaseAuthLogin } from "./login";

export type IApiBaseAuthContext = {
  user: IApiBaseUserSelf | null;

  login: (
    email: string, 
    password: string
  ) => Promise<IApiBaseResponse<IApiBaseAuthLogin>>;

  // register: (
  //   username: string,
  //   email: string,
  //   password: string
  // ) => Promise<void>;

  // logout: () => Promise<void>;
}

export type IApiBaseAuthRefreshToken = {
  token: string
}