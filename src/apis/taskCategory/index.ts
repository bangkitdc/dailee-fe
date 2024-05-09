import { api, support } from "@apis/support";
import { IApiBaseResponse } from "@interfaces/api";
import { IApiBaseTaskCategory } from "@interfaces/taskCategory";

const taskCategory = () => {
  const { apiUrl } = support();

  const url = {
    taskCategory: apiUrl.taskCategory
  }

  const getTaskCategories = async () => {
    const response = await api.get<IApiBaseResponse<IApiBaseTaskCategory[]>>(
      url.taskCategory
    );

    return response.data;
  }

  return {
    getTaskCategories
  }
}

export default taskCategory;