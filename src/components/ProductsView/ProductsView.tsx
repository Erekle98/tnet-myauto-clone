import React from "react";

import { FiltersCardProps } from "../../interfaces/FiltersCardComponentsProps";

import ProductsViewHeader from "./ProductsViewHeader/ProductsViewHeader";
import ProductsViewList from "./ProductsViewList/ProductsViewList";
import ProductViewListMobile from "./ProductViewListMobile/ProductViewListMobile";
import Pagination from "../Pagination/Pagination";

const ProductsView = ({ filters, setFilters }: FiltersCardProps) => {
  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  return (
    <div className='sm:w-[calc(100%-270px)] w-full flex flex-col gap-[16px]'>
      <ProductsViewHeader filters={filters} setFilters={setFilters} />
      <ProductsViewList />
      <ProductViewListMobile />
      <div className='flex justify-center mt-[30px] mb-[50px]'>
        <Pagination
          currentPage={filters.page}
          onPageChange={handlePageChange}
          totalPages={filters.page}
        />
      </div>
    </div>
  );
};

export default ProductsView;
