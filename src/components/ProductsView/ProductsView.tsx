import React from "react";

import { FiltersCardProps } from "../../interfaces/FiltersCardComponentsProps";

import ProductsViewHeader from "./ProductsViewHeader/ProductsViewHeader";
import ProductsViewList from "./ProductsViewList/ProductsViewList";
import ProductViewListMobile from "./ProductViewListMobile/ProductViewListMobile";
import Pagination from "../Pagination/Pagination";

import { useProducts } from "../../hooks/queries/useProducts";

const ProductsView = ({ filters, setFilters }: FiltersCardProps) => {
  const { data, isPlaceholderData, isFetching } = useProducts(filters);

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const products = data?.data.items || [];
  const meta = data?.data.meta;

  const isLoadingState = isPlaceholderData || isFetching;

  return (
    <div className='sm:w-[calc(100%-270px)] w-full flex flex-col gap-[16px]'>
      <ProductsViewHeader
        meta={meta}
        filters={filters}
        setFilters={setFilters}
      />

      <div
        className={`min-h-[calc(100vh-240px)] sm:min-h-[calc(100vh-340px)] transition-all duration-200 ${
          isLoadingState ? "opacity-50 blur-[2px] pointer-events-none" : ""
        }`}
      >
        {meta?.total === 0 ? (
          <div className='sm:h-[calc(100vh-340px)] h-[calc(100vh-240px)] flex items-center justify-center'>
            <p className='text-[32px] text-center'>განცხადებები ვერ მოიძებნა</p>
          </div>
        ) : (
          <>
            <ProductsViewList products={products} />
            <ProductViewListMobile products={products} />
          </>
        )}
      </div>

      {meta?.last_page && meta?.last_page > 1 && (
        <div className='flex justify-center my-[30px]'>
          <Pagination
            currentPage={filters.page}
            onPageChange={handlePageChange}
            totalPages={meta?.last_page || 1}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsView;
