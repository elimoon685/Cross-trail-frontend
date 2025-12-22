"use client"
import { ProductDetails } from "@/interface/productList";
type Props={

    data:ProductDetails
}
const ProductOptions=({data}:Props)=>{


    return (

        <div className="flex flex-col">
        <span className="text-3xl font-bold">{data.title}</span>
        <span></span>
        <div></div>
        <div></div>
        <div></div>

        </div>

    )
}
export default ProductOptions