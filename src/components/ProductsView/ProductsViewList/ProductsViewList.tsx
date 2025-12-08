import React from "react";
import { Product } from "../../../interfaces/Product";
import ProductsViewListItem from "./ProductsViewListItem";
import moment from "moment";

interface ProductsViewListProps {
  products: Product[];
}

const ProductsViewList = ({ products }: ProductsViewListProps) => {
  return (
    <div className='hidden sm:flex flex-col gap-[10px]'>
      {products.map((product) => (
        <ProductsViewListItem
          key={product.car_id}
          isCustomsPassed={product.customs_passed}
          isVipPlus={false}
          isVip={false}
          isColorCard={false}
          isAdditionalInfo={false}
          isSaloon={false}
          isNew={false}
          isDealer={product.user_type === 1}
          dealerName={product.dealer_title}
          location={"Tbilisi"}
          engine={`${(product.engine_volume / 1000).toFixed(1)}`}
          gear={product.gear_type_id === 1 ? "მექანიკა" : "ავტომატიკა"}
          milage={`${product.car_run_km} კმ`}
          wheel={product.right_wheel ? "მარჯვენა" : "მარცხენა"}
          views={product.views}
          time={moment(product.order_date).fromNow()}
          customsPrice={0}
          price={product.price_value}
          year={product.prod_year}
          name={`${product.man_id} ${product.model_id} ${product.car_model}`}
          image={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.daily_views?.product_id}_1.jpg?v=${product.photo_ver}`}
        />
      ))}
    </div>
  );
};

export default ProductsViewList;
