import { request } from "./request";
import { ProductsResponse } from "../interfaces/Product";

export interface ProductFilters {
  forRent: number;
  mans: string | null;
  cats: string | null;
  priceFrom: number | null;
  priceTo: number | null;
  period: {
    value: string;
    label: string;
  } | null;
  sortOrder: {
    value: string;
    label: string;
  } | null;
  page: number;
}

export const getProducts = async (
  filters: ProductFilters
): Promise<ProductsResponse> => {
  const params = new URLSearchParams();

  if (filters.forRent !== undefined)
    params.append("ForRent", filters.forRent.toString());
  if (filters.mans) params.append("Mans", filters.mans);
  if (filters.cats) params.append("Cats", filters.cats);
  if (filters.priceFrom)
    params.append("PriceFrom", filters.priceFrom.toString());
  if (filters.priceTo) params.append("PriceTo", filters.priceTo.toString());
  if (filters.period) params.append("Period", filters.period.value);
  if (filters.sortOrder) params.append("SortOrder", filters.sortOrder.value);
  if (filters.page) params.append("Page", filters.page.toString());

  return request<ProductsResponse>(`/products?${params.toString()}`);
};
