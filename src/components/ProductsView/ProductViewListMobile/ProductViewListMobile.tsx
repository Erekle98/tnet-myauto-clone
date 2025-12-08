import React from "react";
import { Product } from "../../../interfaces/Product";
import ProductViewListMobileItem from "./ProductViewListMobileItem";

interface ProductViewListMobileProps {
  products: Product[];
}

const ProductViewListMobile = ({ products }: ProductViewListMobileProps) => {
  return (
    <div className='flex flex-col sm:hidden gap-[16px]'>
      {products.map((product) => (
        <ProductViewListMobileItem
          key={product.car_id}
          isCustomsPassed={product.customs_passed}
          isVipPlus={false}
          isVip={false}
          isColorCard={false}
          isAdditionalInfo={false}
          location={"Tbilisi"}
          engine={`${(product.engine_volume / 1000).toFixed(1)}`}
          gear={product.gear_type_id === 1 ? "მექანიკა" : "ავტომატიკა"}
          milage={`${product.car_run_km} კმ`}
          wheel={product.right_wheel ? "მარჯვენა" : "მარცხენა"}
          views={product.views}
          time={product.order_date.split(" ")[0]}
          customsPrice={0}
          price={product.price}
          year={product.prod_year}
          name={`${product.man_id} ${product.model_id}`}
          image={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.daily_views?.product_id}_1.jpg?v=${product.photo_ver}`}
        />
      ))}
    </div>
  );
};

export default ProductViewListMobile;
