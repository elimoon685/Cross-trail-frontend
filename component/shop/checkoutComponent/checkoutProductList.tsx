'use client'
import Image from "next/image";
import { useCart } from "@/provider/shoppingCartProvider";
import { totalmem } from "os";
const CheckoutProductList=()=>{
    const { shoppingCart,  count, totalPrice, } = useCart()


    return (

        <div className="flex flex-1 justify-start items-center ">
            <div className="flex flex-col w-120 px-7 py-7 self-start gap-5">
            {
                shoppingCart.map((item, index)=>(

                <div key={index} className="flex grow justify-between mb-4">
                <div className="flex gap-4">
                <div className="flex p-1 border-gray-300 rounded-sm border relative">
                <Image src={item.image} width={80} height={40} alt={item.title} className=""></Image>
                <span className="absolute bg-[#5D9787] rounded-full text-[12px] text-center px-1.5 -top-[10%] -right-[10%] font-bold text-white">{item.quantity}</span>
                </div>
                 <div className="flex flex-col">
                 <span className="font-bold">{item.title}</span>
                 <span>{item.color} / {item.size}</span>
                 </div>
                 </div>
                 {item.comparedPrice ?
                <div className="flex gap-1 ">
                  <del className="text-gray-400 mr-1 ">${item.price}</del>
                  <span className="text-red-600 ">${item.comparedPrice}</span>
                </div>
                : <span className="text-black">${item.price}</span>
              }
                </div>

                ))
            
             }
             <div className="flex justify-between">
                <input
                className="border-2 border-gray-300 px-3 py-2 w-80 rounded-lg"
                placeholder="Discount code or gift card"
                />
                <button className="bg-[#5D9787] rounded-lg px-3 py-2 text-white font-bold">Apply</button>
             </div>
             <div className="flex flex-col gap-5">
                <div className="flex justify-between"> <span>Subtotal {count} items</span> <span>${totalPrice}</span></div>
                <div className="flex justify-between"><span className="text-2xl font-bold">Total</span> <span className="">AUD <span className="text-2xl font-bold">${totalPrice}</span></span></div>
             </div>
             </div>
        </div>
    )
}
export default CheckoutProductList