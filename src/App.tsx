import React, { useEffect, useState } from "react";

import { FiltersCardProps } from "./interfaces/FiltersCardComponentsProps";

import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import FiltersCard from "./components/FiltersCard/FiltersCard";
import ProductsView from "./components/ProductsView/ProductsView";

function App() {
  const [filters, setFilters] = useState<FiltersCardProps["filters"]>({
    forRent: 0,
    mans: null,
    priceFrom: null,
    priceTo: null,
    period: null,
    sortOrder: null,
    page: null,
  });

  useEffect(() => {
    document.title = "იყიდება ავტომობილები";
  }, []);

  return (
    <>
      <Header />
      <div className='mx-auto container'>
        <Breadcrumbs />
        <div className='mt-[20px] flex justify-between'>
          <FiltersCard filters={filters} setFilters={setFilters} />
          <ProductsView />
        </div>
      </div>
      <div className='w-full h-[calc(1000vh-80px)]'></div>
    </>
  );
}

export default App;
