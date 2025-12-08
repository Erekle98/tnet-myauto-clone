import { request } from "./request";
import { Category } from "../interfaces/Category";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await request<{ data: Category[] }>("/cats/get");
  return data;
};
