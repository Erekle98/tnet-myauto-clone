import React, { useEffect, useState } from "react";

import { FiltersCardProps } from "./interfaces/FiltersCardComponentsProps";

import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import FiltersCard from "./components/FiltersCard/FiltersCard";
import ProductsView from "./components/ProductsView/ProductsView";
import FilterIcon from "./assets/images/FilterIcon";

function App() {
  const [filters, setFilters] = useState<FiltersCardProps["filters"]>({
    forRent: 0,
    mans: null,
    cats: null,
    priceFrom: null,
    priceTo: null,
    period: null,
    sortOrder: null,
    page: 1,
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    document.title = "იყიდება ავტომობილები";
  }, []);

  return (
    <>
      <Header />
      <div className='mx-auto container px-0 sm:px-[24px]'>
        <Breadcrumbs />
        <div className='mt-[20px] flex flex-col sm:flex-row items-start relative'>
          <div className='sm:hidden mb-[16px]'>
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className='flex items-center gap-[8px] bg-white px-4 py-2 rounded-lg border border-gray-200'
            >
              <FilterIcon />
              <span className='text-[14px] font-medium'>ფილტრი</span>
            </button>
          </div>
          <FiltersCard
            filters={filters}
            setFilters={setFilters}
            isMobileOpen={isMobileFilterOpen}
            onMobileClose={() => setIsMobileFilterOpen(false)}
          />
          <ProductsView filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </>
  );
}

export default App;
