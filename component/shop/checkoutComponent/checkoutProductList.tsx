'use client'
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useCart } from "@/provider/shoppingCartProvider";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const CheckoutProductList = () => {
  const { shoppingCart, count, totalPrice, } = useCart()
  const ref = useRef<HTMLDivElement | null>(null);
  const [showTop, setShowTop] = useState<boolean>(false);
  const [showBottom, setBottom] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);
  const [isLag, setIsLag] = useState<boolean>(false)


  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      const lg = mq.matches;
      setIsLag(lg);
      setOpenList(lg ? true : false);
    }
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply)

  }, [])

  const updateHeight = (el: HTMLDivElement) => {

    const atTop = el.scrollTop > 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    setBottom(atBottom);
    setShowTop(atTop)

  }

  return (



    <div className="flex flex-col max-w-120 w-full px-3 py-3 self-start gap-5 mt-10 lg:px-7 lg:py-7 lg:sticky lg:top-0">

      {
        !isLag && !openList && (

          <div className="flex justify-between">
            <div className="flex gap-8">
              <div className="flex relative h-20 w-20">

                {
                  shoppingCart.length >= 2 &&
                    (
                      <>
                        <div className="absolute inset-0 z-10">
                          <div className="relative flex h-20 w-20  border border-gray-300 overflow-hidden rounded-xl">
                            <Image alt={shoppingCart[0].image} src={shoppingCart[0].image} fill className="object-cover z-50">
                            </Image>
                          </div>
                        </div>
                        <div className="absolute inset-0 z-0 translate-x-4 -translate-y-2 
                                rotate-6">
                          <div className="relative flex h-20 w-20  border border-gray-300 overflow-hidden rounded-xl">
                            <Image alt={shoppingCart[1].image} src={shoppingCart[1].image} fill className="object-cover">
                            </Image>
                          </div>
                        </div>
                      </>

                    ) 

                    
                }
                {  shoppingCart.length ===1 && 
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
            <div className="flex gap-3 items-center">
              <span className="flex items-center gap-2"><span className="text-gray-400 font-bold">AUD</span> <span className="text-2xl font-bold">${totalPrice}</span></span>
              <span onClick={()=>setOpenList(true)} className="cursor-pointer"><IoIosArrowDown className="h-6 w-6"/></span>
            </div>

          </div>

        )
      }
      {
        !isLag && openList && (

          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">Order summary</span>
            <span onClick={()=>setOpenList(false)}><IoIosArrowUp className="h-6 w-6" /></span>

          </div>
        )
      }
      <div className={`flex flex-col gap-5  ${openList ? " opacity-100" :"max-h-0 opacity-0 pointer-events-none"}`}>
      <div className={`flex flex-col min-h-0 overflow-auto py-1 
      ${showTop ? "border-t" : "border-t border-t-transparent"} 
      ${showBottom ? "border-b border-b-transparent" : "border-b "} 
      lg:h-100 border-gray-300 
      `}
        ref={ref}
        onScroll={(e) => updateHeight(e.currentTarget)}
      >

        {
          shoppingCart.map((item, index) => (

            <div key={index} className="flex justify-between mb-4 mt-2">
              <div className="flex gap-4">
                <div className="flex p-1 border-gray-300 rounded-xl border relative bg-white self-start">
                  <div className="flex relative h-20 w-20 border border-gray-300 overflow-hidden rounded-xl">
                  <Image src={item.image} fill alt={item.title} className="object-cover"></Image>
                  </div>
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
      <div className="flex justify-between gap-3">
        <input
          className="border-2 border-gray-300 px-3 py-2 max-w-80 w-full rounded-lg bg-white"
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