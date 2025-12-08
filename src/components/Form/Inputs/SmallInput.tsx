import React from "react";

const SmallInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string | number;
  onChange: (value: string) => void;
  placeholder: string;
}) => {
  return (
    <div className='w-[90px] h-[36px] bg-white border border-[#E9E9F0] rounded-[6px] flex items-center px-[8px]'>
      <input
        type='number'
        className='w-full text-[13px] text-black800 placeholder-[#8C929B] font-[400] outline-none bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SmallInput;
