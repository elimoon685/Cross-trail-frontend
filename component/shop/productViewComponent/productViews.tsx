'use client'
import ImgShift from "./imgShift";
import InfoDetails from "./infoDetails";
import ProductOptions from "./productOptions";
import ReviewsArea from "./reviewsArea";
import { ProductDetails } from "@/interface/productList";
import { useState } from "react";
type Props = {

  productData: ProductDetails
}


const ProductDetailsView = ({ productData }: Props) => {
  const firstValue = Object.keys(productData.mediaByColor);
  const [scrollColor, setScrollColor] = useState<string>(firstValue[0])
  const [shoppingCartImg, setShoppingCartImg] = useState<string>("")
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center">
        <div className="flex max-w-7xl grow ">
          <div className="flex mt-10 gap-15 grow">

            <ImgShift data={productData.mediaByColor} scrollColor={scrollColor} setShoppingCartImg={setShoppingCartImg} />

            <ProductOptions data={productData} setColor={setScrollColor} shoppingCartImg={shoppingCartImg} />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100">
        <div className="flex max-w-7xl grow">
        
        <InfoDetails feature={productData.features} techspecs={productData.techspecs}/>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="flex max-w-7xl grow">
        <ReviewsArea data={productData.reviewsList} />
        </div>
      </div>
    </div>
  )
}
export default ProductDetailsView