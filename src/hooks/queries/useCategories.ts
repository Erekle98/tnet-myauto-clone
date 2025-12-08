import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.categories],
    queryFn: getCategories,
    staleTime: Infinity,
  });
};
