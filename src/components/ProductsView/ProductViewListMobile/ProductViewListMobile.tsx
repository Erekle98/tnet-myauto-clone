import React from "react";

import ProductViewListMobileItem from "./ProductViewListMobileItem";

const ProductViewListMobile = () => {
  return (
    <div className='flex flex-col sm:hidden'>
      <ProductViewListMobileItem
        isCustomsPassed={true}
        isVipPlus={false}
        isVip={true}
        isColorCard={false}
        isAdditionalInfo={true}
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
      <ProductViewListMobileItem
        isCustomsPassed={false}
        customsPrice={1400}
        isVipPlus={true}
        isVip={false}
        isColorCard={false}
        isAdditionalInfo={false}
        location={"Tbilisi"}
        engine={"1.5 ბენზინი"}
        gear={"ავტომატიკა"}
        milage={"10000"}
        wheel={"საჭე მარცხნივ"}
        views={1000}
        time={"2020"}
        price={108122}
        year={2020}
        name='LAND ROVER Range Rover Evoque'
        image='/car.png'
      />
      <ProductViewListMobileItem
        isCustomsPassed={true}
        customsPrice={0}
        isVipPlus={true}
        isVip={false}
        isColorCard={true}
        isAdditionalInfo={false}
        location={"Tbilisi"}
        engine={"1.5 ბენზინი"}
        gear={"ავტომატიკა"}
        milage={"10000"}
        wheel={"საჭე მარცხნივ"}
        views={1000}
        time={"2020"}
        price={108122}
        year={2020}
        name='LAND ROVER Range Rover Evoque'
        image='/car.png'
      />
    </div>
  );
};

export default ProductViewListMobile;
