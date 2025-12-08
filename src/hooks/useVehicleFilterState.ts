import { useMemo } from "react";
import { FiltersCardProps } from "../interfaces/FiltersCardComponentsProps";
import { parseMans, serializeMans } from "../helpers/filterHelpers";
import { useCarModels } from "./queries/useCarModels";

interface UseVehicleFilterStateProps {
  localFilters: FiltersCardProps["filters"];
  setLocalFilters: React.Dispatch<
    React.SetStateAction<FiltersCardProps["filters"]>
  >;
  manufacturers: { man_id: string; man_name: string }[] | undefined;
  categories: { category_id: number; title: string }[] | undefined;
}

export const useVehicleFilterState = ({
  localFilters,
  setLocalFilters,
  manufacturers,
  categories,
}: UseVehicleFilterStateProps) => {
  const selectedMansData = useMemo(
    () => parseMans(localFilters.mans),
    [localFilters.mans]
  );
  const selectedManIds = selectedMansData.map((m) => m.man_id);

  const modelsQueries = useCarModels(selectedManIds);
  const isModelsLoading = modelsQueries.some((q) => q.isLoading);

  const manufacturerOptions = useMemo(
    () =>
      manufacturers?.map((man) => ({
        value: man.man_id,
        label: man.man_name,
      })) || [],
    [manufacturers]
  );

  const categoryOptions = useMemo(
    () =>
      categories?.map((cat) => ({
        value: cat.category_id,
        label: cat.title,
      })) || [],
    [categories]
  );

  const modelOptions = useMemo(() => {
    return modelsQueries.flatMap((query, index) => {
      const manId = selectedManIds[index];
      const manName =
        manufacturers?.find((m) => m.man_id === manId)?.man_name || "Unknown";
      const models = query.data || [];

      if (models.length === 0) return [];

      return [
        {
          label: manName,
          options: models.map((model) => ({
            value: model.model_id,
            label: model.model_name,
            man_id: manId,
          })),
        },
      ];
    });
  }, [modelsQueries, selectedManIds, manufacturers]);

  const handleManufacturerChange = (selectedOptions: any) => {
    const newSelectedManIds = selectedOptions.map((o: any) => o.value);

    const newMansData = newSelectedManIds.map((manId: string) => {
      const existing = selectedMansData.find((d) => d.man_id === manId);
      return existing || { man_id: manId, model_ids: [] };
    });

    const newString = serializeMans(newMansData);
    setLocalFilters({ ...localFilters, mans: newString });
  };

  const handleModelChange = (selectedOptions: any) => {
    const manToModelsMap: Record<number, number[]> = {};

    selectedManIds.forEach((id) => {
      manToModelsMap[Number(id)] = [];
    });

    selectedOptions.forEach((opt: any) => {
      if (manToModelsMap[opt.man_id]) {
        manToModelsMap[opt.man_id].push(opt.value);
      }
    });

    const newMansData = Object.keys(manToModelsMap).map((manIdStr) => ({
      man_id: Number(manIdStr),
      model_ids: manToModelsMap[Number(manIdStr)],
    }));

    const newString = serializeMans(newMansData);
    setLocalFilters({ ...localFilters, mans: newString });
  };

  const getSelectedManufacturers = () => {
    return manufacturerOptions.filter((opt) =>
      selectedManIds.includes(opt.value)
    );
  };

  const getSelectedModels = () => {
    const allModelOptions = modelOptions.flatMap((group) => group.options);
    const allSelectedModelIds = selectedMansData.flatMap((m) => m.model_ids);
    return allModelOptions.filter((opt) =>
      allSelectedModelIds.includes(String(opt.value))
    );
  };

  const getSelectedCategories = () => {
    if (!localFilters.cats) return [];
    const catIds = localFilters.cats.split(".").map(Number);
    return categoryOptions.filter((opt) => catIds.includes(opt.value));
  };

  return {
    isModelsLoading,
    manufacturerOptions,
    categoryOptions,
    modelOptions,
    selectedManIds,
    handleManufacturerChange,
    handleModelChange,
    getSelectedManufacturers,
    getSelectedModels,
    getSelectedCategories,
  };
};
