import React from "react";

import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  return (
    <div className='hidden sm:flex items-center gap-[4px] mt-[32px] text-black600'>
      <p>მთავარი</p>
      <ChevronRight width={16} />
      <p>ძიება</p>
      <ChevronRight width={16} />
      <p className='text-orange800'>იყიდება</p>
    </div>
  );
};

export default Breadcrumbs;
