import { request } from "./request";
import { CarModel } from "../interfaces/CarModel";

export const getCarModels = async (
  manufacturerId: string
): Promise<CarModel[]> => {
  const { data } = await request<{ data: CarModel[] }>(
    `/getManModels?man_id=${manufacturerId}`
  );
  return data;
};
