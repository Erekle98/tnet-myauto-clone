import React from "react";
import SortSelectComponent from "../../Form/SortSelectComponent/SortSelectComponent";

import { FiltersCardProps } from "../../../interfaces/FiltersCardComponentsProps";

import { PERIODS, SORTS } from "../../../constants/filtersConstants";
import { updateFilterState } from "../../../helpers/filterHelpers";
import { Meta } from "../../../interfaces/Product";

const ProductsViewHeader = ({
  meta,
  filters,
  setFilters,
}: FiltersCardProps & { meta: Meta | undefined }) => {
  return (
    <div className='hidden sm:flex w-full items-center justify-between'>
      <p className='text-[16px] text-black800'>{meta?.total} განცხადება</p>
      <div className='flex items-center gap-[8px]'>
        <SortSelectComponent
          options={PERIODS.map((period) => ({
            value: period.value,
            label: period.name,
          }))}
          value={filters.period}
          onChange={(period) =>
            updateFilterState({
              key: "period",
              value: period,
              setFilters,
            })
          }
          placeholder='პერიოდი'
        />
        <SortSelectComponent
          options={SORTS.map((sort) => ({
            value: sort.id,
            label: sort.name,
          }))}
          value={filters.sortOrder}
          onChange={(sortOrder) =>
            updateFilterState({
              key: "sortOrder",
              value: sortOrder,
              setFilters,
            })
          }
          placeholder='სორტირება'
        />
      </div>
    </div>
  );
};

export default ProductsViewHeader;
