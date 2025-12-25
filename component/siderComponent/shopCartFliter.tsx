import { useCart } from "@/provider/shoppingCartProvider";
import { RxCross2 } from "react-icons/rx";
import { ImBin } from "react-icons/im";
const ShoppingCartSider = () => {

  const { shoppingCart, removeCart } = useCart()

  return (

    <div className="flex flex-col ">
      <span className="mt-3 self-end px-3 py-2"><RxCross2 className="w-7 h-7" /></span>
      <span className="text-2xl font-bold self-center">Cart</span>
      <span className="h-1 w-full bg-gray-300 "></span>
      {shoppingCart.length > 0 ? (
        shoppingCart.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <img></img>
            <div className="flex flex-col gap-3">
              <span>{item.title}</span>
              <div className="flex items-center w-30 h-7 border-2 border-gray-300">
                <span className="text-xl  flex-1 flex justify-center border-r-2 border-gray-300">-</span>
                <span className="flex-1 flex justify-center">{item.quantity}</span>
                <span className="text-xl  flex-1 flex justify-center border-l-2 border-gray-300">+</span>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <ImBin className="w-5 h-52"/>
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
  )
}
export default ShoppingCartSider