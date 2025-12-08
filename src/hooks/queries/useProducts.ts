import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProducts, ProductFilters } from "../../api";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: QUERY_KEYS.products(filters as Record<string, any>),
    queryFn: () => getProducts(filters),
    placeholderData: keepPreviousData,
  });
};
