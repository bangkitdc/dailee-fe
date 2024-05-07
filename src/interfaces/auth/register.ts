import { IApiBaseUserSelf } from "@interfaces/user"

export interface IApiBaseAuthRegister {
  user: IApiBaseUserSelf
}

export interface IApiBaseRegisterForm {
  username: string
  email: string
  password: string
  confirm_password: string
}