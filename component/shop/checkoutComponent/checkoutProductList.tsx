'use client'
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useCart } from "@/provider/shoppingCartProvider";
const CheckoutProductList=()=>{
    const { shoppingCart,  count, totalPrice, } = useCart()
    const ref=useRef<HTMLDivElement | null>(null);
    const [showTop, setShowTop]=useState<boolean>(false);
    const [showBottom, setBottom]=useState<boolean>(false);
    const [openList, setOpenList]=useState<boolean>(false);
    const [isLag, setIsLag]=useState<boolean>(false)


 useEffect(()=>{
    const mq = window.matchMedia("(min-width: 1024px)");

    const apply=()=>{
     const lg=mq.matches;
     setIsLag(lg);
     setOpenList(lg? true: false);
     apply();
     mq.addEventListener("change", apply);
     return ()=>mq.removeEventListener("change",apply)

    }


 },[])

    const updateHeight=(el:HTMLDivElement)=>{
    
        const atTop=el.scrollTop > 0;
        const atBottom=el.scrollTop+el.clientHeight >= el.scrollHeight -1;
        setBottom(atBottom);
        setShowTop(atTop)
        
    }

    return (
            


            <div className="flex flex-col max-w-120 px-7 py-7 self-start gap-5 mt-10">

                {
                    !isLag && !openList && (

                        <div className="flex justify-between">
                            <div className="flex gap-10">
                         <div className="flex relative h-20 w-20">

                            {
                                shoppingCart.length > 1 ? 
                                (
                                <>
                                <div className="absolute inset-0 z-10">
                                    <div className="relative flex h-20 w-20 p-1 border border-gray-300 overflow-hidden rounded-xl">
                                <Image alt={shoppingCart[0].title} src={shoppingCart[0].image} fill className="object-cover z-50">
                                </Image> 
                                </div>
                                </div>
                                <div className="absolute inset-0 z-0 translate-x-6 
                                rotate-6">
                                <div className="relative flex h-20 w-20 p-1 border border-gray-300 overflow-hidden rounded-xl">
                                <Image alt={shoppingCart[1].title} src={shoppingCart[1].image} fill className="object-cover">
                                </Image>
                                </div>
                                </div>
                                </>
                                
                                ):
                                
                                (
                                    <div className="absolute inset-0 z-10">
                                    <div className="relative flex h-20 w-20 p-1 border border-gray-300 overflow-hidden rounded-xl">
                                <Image alt={shoppingCart[0].title} src={shoppingCart[0].image} fill className="object-cover z-50">
                                </Image> 
                                </div>
                                </div>
                                )
                            }
                              
                         </div>

                               <div className="flex flex-col">
                                <span className="text-2xl font-bold">Total</span>
                                <span>{count} items</span>
                                </div>
                                </div>
                                <div className="flex">
                                    <span className="flex items-center gap-3"><span className="text-gray-400 font-bold">AUD</span> <span className="text-2xl font-bold">${totalPrice}</span></span>
                                </div>
                       
                        </div>

                    )
                }
                <div className={`flex flex-col min-h-0 overflow-auto py-1 ${showTop ? "border-t":"border-t border-t-transparent"} ${showBottom ? "border-b border-b-transparent":"border-b "} lg:h-100 border-gray-300 `}
                     ref={ref}
                     onScroll={(e)=>updateHeight(e.currentTarget)}
                     >
                    
            {
                shoppingCart.map((item, index)=>(

                <div key={index} className="flex grow justify-between mb-4 mt-2">
                <div className="flex gap-4">
                <div className="flex p-1 border-gray-300 rounded-sm border relative">
                <Image src={item.image} width={80} height={80} alt={item.title} className=""></Image>
                <span className="absolute bg-[#5D9787] rounded-full text-[12px] text-center px-1.5 -top-[10%] -right-[10%] font-bold text-white z-50">{item.quantity}</span>
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
             </div>
             <div className="flex justify-between">
                <input
                className="border-2 border-gray-300 px-3 py-2 max-w-80 w-full rounded-lg"
                placeholder="Discount code or gift card"
                />
                <button className="bg-[#5D9787] rounded-lg px-3 py-2 text-white font-bold">Apply</button>
             </div>
             <div className="flex flex-col gap-5">
                <div className="flex justify-between"> <span>Subtotal {count} items</span> <span>${totalPrice}</span></div>
                <div className="flex justify-between"><span className="text-2xl font-bold">Total</span> <span className="">AUD <span className="text-2xl font-bold">${totalPrice}</span></span></div>
             </div>
             </div>
    )
}
export default CheckoutProductList