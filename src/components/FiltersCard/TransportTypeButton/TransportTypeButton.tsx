import React, { ComponentType } from "react";

interface TransportTypeButtonProps {
  isActive: boolean;
  type: {
    id: number;
    icon: ComponentType<{ color: string }>;
  };
  setActive: () => void;
}

const TransportTypeButton = ({
  isActive,
  type,
  setActive,
}: TransportTypeButtonProps) => {
  const Icon = type.icon;

  return (
    <div
      className={`w-1/3 flex items-center justify-center px-2 py-1 ${
        isActive ? "bg-white border-b-orange800" : "bg-gray400 border-b-gray200"
      } border-b-[1px] 
      ${type.id === 1 ? "rounded-tl-[10px]" : ""}
       ${type.id === 2 ? "border-x-[1px]" : ""}
      ${type.id === 3 ? "rounded-tr-[10px]" : ""} cursor-pointer`}
      onClick={setActive}
    >
      <Icon color={isActive ? "#FD4100" : "#8C929B"} />
    </div>
  );
};

export default TransportTypeButton;
