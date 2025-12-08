export const QUERY_KEYS = {
  manufacturers: "manufacturers",
  carModels: (manufacturerId: string | number) => ["carModels", manufacturerId],
  categories: "categories",
  products: (filters: Record<string, any>) => ["products", filters],
};
