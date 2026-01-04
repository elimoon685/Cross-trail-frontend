import { useCart } from "@/provider/shoppingCartProvider";
import { RxCross2 } from "react-icons/rx";
import { ImBin } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
type Props={

  toggle:React.Dispatch<React.SetStateAction<boolean>>

}
const ShoppingCartSider = ({toggle}:Props) => {

  const { shoppingCart, removeCart, count, totalPrice, increaseQuantity, decreaseQuantity} = useCart()

  return (

    <div className="flex flex-col justify-between grow">
      <div className="flex flex-col grow">
      <span className="mt-3 self-end px-3 py-2"
            onClick={()=>toggle(prev=>!prev)}
      ><RxCross2 className="w-7 h-7" /></span>
      <span className="text-2xl font-bold self-center">Cart</span>
      <span className="h-1 w-full bg-gray-300 mb-3"></span>
      <div className="flex flex-col h-[calc(100vh-250px)] overflow-y-auto">
      {shoppingCart.length > 0 ? (
        shoppingCart.map((item, index) => (
          <div key={index} className="flex justify-between h-25 px-3 pb-3 border-b-2 border-gray-200 mt-3 ">
          <div className="flex justify-between gap-3">
            <Image src={item.image} width={80} height={40} alt={item.title}></Image>
            <div className="flex flex-col justify-between">
              <Link href={`/shop/product/${item.productId}`}
              onClick={() => toggle(false)}>
              <span>{item.title}</span>
              </Link>
              <span>{item.color} / {item.size}</span>
              <div className="flex items-center w-30 h-7 border-2 border-gray-300">
                <button className="text-xl  flex-1 flex justify-center border-r-2 border-gray-300 cursor-pointer" 
                onClick={()=>decreaseQuantity(item.Id)}>-</button>
                <span className="flex-1 flex justify-center">{item.quantity}</span>
                <button className="text-xl  flex-1 flex justify-center border-l-2 border-gray-300 cursor-pointer" 
                onClick={()=>increaseQuantity(item.Id)}>+</button>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center justify-between ">
              <ImBin className="w-4 h-4 cursor-pointer self-end"
              onClick={()=>removeCart(item.Id)}
                  />
              {item.comparedPrice ?
                <div className="flex gap-1 ">
                  <del className="text-gray-400 mr-1 ">${item.price}</del>
                  <span className="text-red-600 ">${item.comparedPrice}</span>
                </div>
                : <span className="text-black">${item.price}</span>
              }
            </div>

          </div>
        ))
      ) : <span className="text-2xl self-center mt-3">Your Cart is Empty</span>}
      </div>
      </div>
    {shoppingCart.length>0 && 
      <div className="flex flex-col px-3 mb-5 gap-2">
      <div className="flex justify-between">
        <span className="text-xl flex items-center gap-1">Subtotal items:<span className="font-bold text-2xl">{count}</span></span>
        <span className="text-xl flex items-center gap-1">Total:<span className="font-bold text-2xl">${totalPrice}</span></span>
      </div>
      <button className="bg-[#5D9787] px-3 py-3 text-2xl text-white font-bold cursor-pointer">Check out</button>
      </div>
}

    </div>
  )
}
export default ShoppingCartSider