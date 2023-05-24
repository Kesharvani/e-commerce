import axios from "axios";

export const categoryService = () => {
  return axios.get("/api/categories");
};
