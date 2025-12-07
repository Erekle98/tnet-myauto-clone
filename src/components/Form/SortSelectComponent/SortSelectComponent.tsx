import React from "react";
import Select from "react-select";

interface SortSelectComponentProps {
  options: { value: any; label: any }[];
  placeholder?: string;
  value: any;
  onChange: (value: any) => void;
}

const SortSelectComponent = ({
  options,
  placeholder,
  value,
  onChange,
}: SortSelectComponentProps) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
      isSearchable={false}
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
          width: "max-content",
          minWidth: "100%",
          right: 0,
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? "#F2F3F6" : "#fff",
          "&:hover": {
            backgroundColor: state.isSelected ? "#F2F3F6" : "#F5F5F8",
          },
          color: state.isSelected ? "#272A37" : "#6F7383",
          fontSize: "13px",
          fontWeight: state.isSelected ? "500" : "400",
          whiteSpace: "nowrap",
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
  );
};

export default SortSelectComponent;
