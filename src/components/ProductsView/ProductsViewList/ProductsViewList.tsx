import React from "react";

import ProductsViewListItem from "./ProductsViewListItem";

const ProductsViewList = () => {
  return (
    <div className='hidden sm:flex flex-col gap-[10px]'>
      <ProductsViewListItem
        isCustomsPassed={true}
        isVipPlus={false}
        isVip={true}
        isColorCard={false}
        isAdditionalInfo={false}
        isSaloon={true}
        isNew={false}
        isDealer={true}
        location={"Tbilisi"}
        engine={"1.5 ბენზინი"}
        gear={"ავტომატიკა"}
        milage={"10000"}
        wheel={"საჭე მარცხნივ"}
        views={1000}
        time={"2020"}
        customsPrice={0}
        price={108122}
        year={2020}
        name='LAND ROVER Range Rover Evoque'
        image='/car.png'
      />
    </div>
  );
};

export default ProductsViewList;
