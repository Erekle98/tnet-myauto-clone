import React from "react";
import Select from "react-select";

interface SelectComponentProps {
  label?: string;
  options: { value: any; label: any }[];
  isMulti?: boolean;
  placeholder?: string;
  value: any;
  onChange: (value: any) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
}

const FiltersSelectComponent = ({
  label,
  options,
  isMulti,
  placeholder,
  value,
  onChange,
  isDisabled,
  isLoading,
  isClearable,
  isSearchable,
}: SelectComponentProps) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      {label && <label className='text-[12px] text-[#272A37]'>{label}</label>}
      <Select
        options={options}
        isMulti={isMulti}
        className='w-[202px]'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base) => ({
            ...base,
            border: "1px solid #E2E5EB",
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #E2E5EB",
            },
            height: "36px",
            minHeight: "36px",
            fontSize: "13px",
            backgroundColor: "#fff",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#6F7383",
            fontSize: "13px",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#272A37",
            fontSize: "13px",
          }),
          menu: (base) => ({
            ...base,
            fontSize: "13px",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? "#FD4100" : "white",
            "&:hover": {
              backgroundColor: state.isSelected ? "#FD4100" : "#F5F5F8",
              color: state.isSelected ? "white" : "#272A37",
            },
            color: state.isSelected ? "white" : "#272A37",
            fontSize: "13px",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            width: "30px",
            height: "30px",
            marginBottom: "4px",
            color: "#8C929B",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 8px",
          }),
        }}
      />
    </div>
  );
};

export default FiltersSelectComponent;
