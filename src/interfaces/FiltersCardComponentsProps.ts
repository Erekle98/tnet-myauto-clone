export interface TrasportTypeButtonIconProps {
  color: string;
}

export interface FiltersCardProps {
  filters: {
    forRent: 0 | 1;
    mans: { id?: number; cat?: number }[] | null;
    priceFrom: string | null;
    priceTo: string | null;
    period: "1h" | "2h" | "3h" | "1d" | "2d" | "3d" | "1w" | "2w" | "3w" | null;
    sortOrder: 1 | 2 | 3 | 4 | 5 | 6 | null;
    page: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<FiltersCardProps["filters"]>>;
}
