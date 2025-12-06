import { FiltersCardProps } from "../interfaces/FiltersCardComponentsProps";

interface UpdateFilterStateProps {
  key: string;
  value: any;
  setFilters: React.Dispatch<React.SetStateAction<FiltersCardProps["filters"]>>;
}

export const updateFilterState = ({
  key,
  value,
  setFilters,
}: UpdateFilterStateProps) => {
  setFilters((prev: FiltersCardProps["filters"]) => ({
    ...prev,
    [key]: value,
  }));
};
