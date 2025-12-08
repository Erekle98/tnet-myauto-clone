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

export const parseMans = (mansString: string | null) => {
  if (!mansString) return [];
  return mansString.split("-").map((group) => {
    const parts = group.split(".");
    const man_id = parts[0];
    const model_ids = parts.slice(1);
    return { man_id, model_ids };
  });
};

export const serializeMans = (
  data: { man_id: number; model_ids: number[] }[]
) => {
  if (data.length === 0) return null;
  return data
    .map((item) => {
      if (item.model_ids.length > 0) {
        return `${item.man_id}.${item.model_ids.join(".")}`;
      }
      return `${item.man_id}`;
    })
    .join("-");
};
