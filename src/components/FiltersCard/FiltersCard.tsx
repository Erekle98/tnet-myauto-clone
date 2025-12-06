import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { FiltersCardProps } from "../../interfaces/FiltersCardComponentsProps";
import {
  DEAL_TYPES,
  TRANSPORT_TYPES,
} from "../../constants/filtersCardConstants";
import { updateFilterState } from "../../helpers/filterHelpers";

import TransportTypeButton from "./TransportTypeButton/TransportTypeButton";
import FiltersSelectComponent from "../Form/FiltersSelectComponent/FiltersSelectComponent";
import CurrencyToggle from "../Form/CurrencyToggle/CurrencyToggle";
import SmallInput from "../Form/Inputs/SmallInput";
import Button from "../Form/Button/Button";

const FiltersCard = ({ filters, setFilters }: FiltersCardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTransportType, setActiveTransportType] = useState<number>(
    Number(searchParams.get("transportType")) || 1
  );

  const [currency, setCurrency] = useState<"GEL" | "USD">("GEL");

  return (
    <div className='w-[250px] mr-[20px] rounded-t-[10px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border-gray-200 border-[1px]'>
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
            value={filters.forRent}
            onChange={(value) => setFilters({ ...filters, forRent: value })}
            placeholder='გარიგების ტიპი'
          />
          <FiltersSelectComponent
            label='მწარმოებელი'
            options={DEAL_TYPES.map((dealType) => ({
              value: dealType.value,
              label: dealType.name,
            }))}
            value={filters.mans}
            onChange={(value) => setFilters({ ...filters, mans: value })}
            placeholder='ყველა მწარმოებელი'
          />
          <FiltersSelectComponent
            label='კატეგორია'
            options={DEAL_TYPES.map((dealType) => ({
              value: dealType.value,
              label: dealType.name,
            }))}
            value={filters.mans}
            onChange={(value) => setFilters({ ...filters, mans: value })}
            placeholder='ყველა კატეგორია'
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
              value={filters.priceFrom || ""}
              onChange={(value: string) =>
                updateFilterState({
                  key: "priceFrom",
                  value,
                  setFilters,
                })
              }
            />
            <span className='text-[12px] font-bold text-black500'>- </span>
            <SmallInput
              placeholder='მდე'
              value={filters.priceTo || ""}
              onChange={(value: string) =>
                updateFilterState({
                  key: "priceTo",
                  value,
                  setFilters,
                })
              }
            />
          </div>
        </div>
        <div className='flex items-center justify-center pt-[16px] w-full shadow-[0_-2px_16px_0px_#272A3721]'>
          <Button>ძებნა</Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersCard;
