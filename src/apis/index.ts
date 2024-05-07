import auth from "@apis/auth"
import user from "@apis/user"
import error from "@apis/error"

export const apiBase = () => {
  return {
    auth,
    user,
    error
  }
}