import React, { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { FiltersCardProps } from "../../interfaces/FiltersCardComponentsProps";
import { DEAL_TYPES, TRANSPORT_TYPES } from "../../constants/filtersConstants";
import { updateFilterState } from "../../helpers/filterHelpers";

import TransportTypeButton from "./TransportTypeButton/TransportTypeButton";
import FiltersSelectComponent from "../Form/FiltersSelectComponent/FiltersSelectComponent";
import CurrencyToggle from "../Form/CurrencyToggle/CurrencyToggle";
import SmallInput from "../Form/Inputs/SmallInput";
import Button from "../Form/Button/Button";

import { useManufacturers } from "../../hooks/queries/useManufacturers";
import { useCategories } from "../../hooks/queries/useCategories";
import { useVehicleFilterState } from "../../hooks/useVehicleFilterState";

const FiltersCard = ({
  filters,
  setFilters,
  isMobileOpen,
  onMobileClose,
}: FiltersCardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const [activeTransportType, setActiveTransportType] = useState<number>(
    Number(searchParams.get("transportType")) || 1
  );

  const [currency, setCurrency] = useState<"GEL" | "USD">("GEL");

  const { data: manufacturers, isLoading: isMansLoading } = useManufacturers();
  const { data: categories, isLoading: isCatsLoading } = useCategories();

  const {
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
  } = useVehicleFilterState({
    localFilters,
    setLocalFilters,
    manufacturers,
    categories,
  });

  const handleSearch = () => {
    setFilters({ ...localFilters, page: 1 });
    if (onMobileClose) onMobileClose();
  };

  return (
    <div
      className={`sm:block w-[250px] mr-[20px] rounded-t-[10px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border-gray-200 border-[1px] sm:sticky sm:top-[100px] 
      ${
        isMobileOpen
          ? "fixed inset-0 z-50 overflow-y-auto w-full h-full rounded-none m-0 border-none animate-slide-up bg-white"
          : "hidden"
      }`}
    >
      {isMobileOpen && (
        <div className='flex items-center justify-between p-[20px] border-b border-gray-200 sm:hidden'>
          <span className='font-bold text-[16px]'>ფილტრი</span>
          <button onClick={onMobileClose} className='p-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 6L6 18M6 6L18 18'
                stroke='#272A37'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      )}
      <div className='flex items-center'>
        {TRANSPORT_TYPES.map((transportType) => (
          <TransportTypeButton
            key={transportType.id}
            type={transportType}
            isActive={transportType.id === activeTransportType}
            setActive={() => {
              setActiveTransportType(transportType.id);
              searchParams.set("transportType", transportType.id.toString());
              setSearchParams(searchParams);
            }}
          />
        ))}
      </div>
      <div className='py-[24px]'>
        <div className='flex flex-col items-center gap-[20px] border-b-[1px] border-gray-200 pb-[20px]'>
          <FiltersSelectComponent
            label='გარიგების ტიპი'
            options={DEAL_TYPES.map((dealType) => ({
              value: dealType.value,
              label: dealType.name,
            }))}
            value={
              DEAL_TYPES.find((t) => t.value === localFilters.forRent)
                ? {
                    value: localFilters.forRent,
                    label:
                      DEAL_TYPES.find((t) => t.value === localFilters.forRent)
                        ?.name || "",
                  }
                : null
            }
            onChange={(option) =>
              setLocalFilters({ ...localFilters, forRent: option.value })
            }
            placeholder='გარიგების ტიპი'
          />
          <FiltersSelectComponent
            label='მწარმოებელი'
            isMulti
            options={manufacturerOptions}
            isLoading={isMansLoading}
            value={getSelectedManufacturers()}
            onChange={handleManufacturerChange}
            placeholder='ყველა მწარმოებელი'
            isSearchable
            isClearable
          />
          <FiltersSelectComponent
            label='მოდელი'
            isMulti
            options={modelOptions}
            isLoading={isModelsLoading}
            isDisabled={selectedManIds.length === 0}
            value={getSelectedModels()}
            onChange={handleModelChange}
            placeholder='ყველა მოდელი'
            isSearchable
            isClearable
          />
          <FiltersSelectComponent
            label='კატეგორია'
            options={categoryOptions}
            isLoading={isCatsLoading}
            isMulti
            value={getSelectedCategories()}
            onChange={(options: any) => {
              const ids = options.map((o: any) => o.value).join(".");
              setLocalFilters({ ...localFilters, cats: ids || null });
            }}
            placeholder='ყველა კატეგორია'
            isSearchable
            isClearable
          />
        </div>

        <div className='pt-[16px] pb-[44px] flex flex-col items-center gap-[8px]'>
          <div className='w-[202px] flex items-center justify-between'>
            <label className='text-[12px] font-bold text-black800'>ფასი</label>
            <CurrencyToggle value={currency} onChange={setCurrency} />
          </div>
          <div className='flex items-center gap-[6px] w-[202px]'>
            <SmallInput
              placeholder='დან'
              value={localFilters.priceFrom || ""}
              onChange={(value: string) =>
                updateFilterState({
                  key: "priceFrom",
                  value,
                  setFilters: setLocalFilters,
                })
              }
            />
            <span className='text-[12px] font-bold text-black500'>- </span>
            <SmallInput
              placeholder='მდე'
              value={localFilters.priceTo || ""}
              onChange={(value: string) =>
                updateFilterState({
                  key: "priceTo",
                  value,
                  setFilters: setLocalFilters,
                })
              }
            />
          </div>
        </div>
        <div className='flex items-center justify-center pt-[16px] w-full shadow-[0_-2px_16px_0px_#272A3721]'>
          <Button onClick={handleSearch}>ძებნა</Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersCard;
