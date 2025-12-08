export interface TrasportTypeButtonIconProps {
  color: string;
}

export interface FiltersCardProps {
  filters: {
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
  };
  setFilters: React.Dispatch<React.SetStateAction<FiltersCardProps["filters"]>>;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}
