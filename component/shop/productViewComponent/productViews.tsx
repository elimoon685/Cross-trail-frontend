'use client'
import ImgShift from "./imgShift";
import InfoDetails from "./infoDetails";
import ProductOptions from "./productOptions";
import ReviewsArea from "./reviewsArea";
import { ProductDetails } from "@/interface/productList";
import { useState } from "react";
type Props={

  productData:ProductDetails
}


const ProductDetailsView = ({productData}:Props) => {

  return (

    <div className="flex flex-col max-w-7xl w-full self-center">
      <div className="flex mt-10 gap-15">

        <ImgShift data={productData.mediaByColor}/>

        <ProductOptions data={productData}/>
      </div>
      <div className="">
        <InfoDetails />
      </div>
      <div>
        <ReviewsArea />
      </div>
    </div>
  )
}
export default ProductDetailsView