import React from "react";

const WheelIcon = ({ color = "#9CA2AA" }: { color?: string }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='8' cy='8' r='6.3' stroke={color} strokeWidth='1.4' />
      <circle cx='8' cy='8' r='1.3' stroke={color} strokeWidth='1.4' />
      <path
        d='M9.5 8L13.5 6.5'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.21387 7.99979L1.99977 7.29883'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 9.5V14'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default WheelIcon;
