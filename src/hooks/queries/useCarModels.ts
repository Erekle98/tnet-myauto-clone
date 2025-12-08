import { useQueries } from "@tanstack/react-query";
import { getCarModels } from "../../api";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useCarModels = (manufacturerIds: string[]) => {
  return useQueries({
    queries: manufacturerIds.map((id) => ({
      queryKey: QUERY_KEYS.carModels(id),
      queryFn: () => getCarModels(id),
      staleTime: Infinity,
      enabled: !!id,
    })),
  });
};
