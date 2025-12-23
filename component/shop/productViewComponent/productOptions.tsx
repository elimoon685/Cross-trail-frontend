"use client"
import { ProductDetails } from "@/interface/productList";
import { useState } from "react";
import { Variant } from "@/interface/productList";
import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
type Props={

    data:ProductDetails
}
const arr = Array.from({ length: 5 });
const ProductOptions=({data}:Props)=>{
const [selectedVariant, setSelectedVariant]=useState<Variant>(data.variants[0]);
const [selectedColor, setSelectedColor]=useState<string>(data.variants[0].color);
const [selectedSize, setSelectedSize]=useState<string | null>(data.variants[0].size);
const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];

const uniqueSizes = Array.from(
  new Set(data.variants.map(v => v.size))
).sort(
  (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
);
    return (

        <div className="flex flex-col gap-5">
        <span className="text-3xl font-bold">{data.title}</span>
        {
            selectedVariant.compareAtAmount ? 
            <div className="flex gap-3">
            <del className="text-gray-400 mr-2 text-3xl">${selectedVariant.price}</del>
            <span className="text-red-600 text-3xl">${selectedVariant.compareAtAmount}</span>
            </div>
            :  <span className="text-black text-3xl">${selectedVariant.price}</span>
        }
        <div className="flex gap-5">
        {
            (data.reviews !== null && data.reviewsCount!==null) &&
              <div className="flex gap-1">
                {
                  arr.map((_, index) => {
                    if (data.reviews! - index > 0.5) {
                      return <IoStar className="text-amber-500 w-6 h-6" />
                    } else if (data.reviews! - index < 0.5 && data.reviews! - index > 0) {
                      return <IoStarHalf className="text-amber-500 w-6 h-6" />
                    } else {

                      return <IoStarOutline className="text-amber-500 w-6 h-6" />
                    }

                  }
                  
                  )
                }
                
              </div>
            }
            { data.reviewsCount!==null && <span className="">{data.reviewsCount} Reviews</span>}
        </div>
        {data.options.size !==null && 
        <div className="flex gap-3">
            {
                data.options.size.map((size, index)=>(
                    <span key={`${index}-${size}`} className=" w-10 h-10 border border-gray-300 flex items-center justify-center">
                        {size}</span>

                ))
            }

        </div>
        }
        <div>

        </div>

        </div>

    )
}
export default ProductOptions