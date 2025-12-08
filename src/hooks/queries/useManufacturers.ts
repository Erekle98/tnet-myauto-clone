import { useQuery } from "@tanstack/react-query";
import { getManufacturers } from "../../api";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useManufacturers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.manufacturers],
    queryFn: getManufacturers,
    staleTime: Infinity,
  });
};
