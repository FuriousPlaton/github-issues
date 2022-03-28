import { ApiClient } from "./ApiClient";

export const getRepositories = async (keyword: string) => {
  const response = await ApiClient.get(`api/search?q=${keyword}`);
  return response.data;
};
