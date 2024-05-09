import auth from "@apis/auth"
import user from "@apis/user"
import error from "@apis/error"
import assessment from "@apis/assessment"
import taskCategory from "@apis/taskCategory"

export const apiBase = () => {
  return {
    auth,
    user,
    error,
    assessment,
    taskCategory
  }
}