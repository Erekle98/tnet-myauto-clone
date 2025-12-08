import { request } from "./request";
import { Manufacturer } from "../interfaces/Manufacturer";

export const getManufacturers = async (): Promise<Manufacturer[]> => {
  return request<Manufacturer[]>(undefined, undefined, true);
};
