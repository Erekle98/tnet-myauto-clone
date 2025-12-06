import React from "react";

interface CurrencyToggleProps {
  value: "GEL" | "USD";
  onChange: (value: "GEL" | "USD") => void;
}

const CurrencyToggle = ({ value, onChange }: CurrencyToggleProps) => {
  return (
    <div className='flex items-center bg-white border border-gray-200 rounded-[20px] p-[2px] w-fit'>
      <div
        className={`w-[24px] h-[24px] flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ${
          value === "GEL"
            ? "bg-black800 text-white shadow-sm"
            : "text-[#8C929B]"
        }`}
        onClick={() => onChange("GEL")}
      >
        <span className='text-[12px] font-bold'>₾</span>
      </div>
      <div
        className={`w-[24px] h-[24px] flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ${
          value === "USD"
            ? "bg-black800 text-white shadow-sm"
            : "text-[#8C929B]"
        }`}
        onClick={() => onChange("USD")}
      >
        <span className='text-[14px] font-bold'>$</span>
      </div>
    </div>
  );
};

export default CurrencyToggle;
