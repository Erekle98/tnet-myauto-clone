import React from "react";
import LogoSvg from "../../assets/images/LogoSvg";

const Header = () => {
  return (
    <div className='w-full bg-white h-[80px] sticky top-0 z-50'>
      <div className='px-[16px] sm:px-0 mx-auto container flex items-center h-full'>
        <LogoSvg />
      </div>
    </div>
  );
};

export default Header;
