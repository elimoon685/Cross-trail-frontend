import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { ProductsList } from "@/interface/productList";
type Props = {
  data: ProductsList[]
}
const arr = Array.from({ length: 5 });
const ProductLists = ({ data }: Props) => {


  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-10 mt-10 ml-10 mr-10">
      {
        data.map((product, index) => (

          <div key={index} className="flex flex-col h-[350px]  border-gray-300 border justify-between">
            <div className="">
             <img className=""></img>
            </div>
            <div className="flex gap-2">
              {product.color.map((color, idx) => (
                <span key={idx} className={`w-5 h-5 rounded-full border-gray-300 border hover:scale-110`} style={{ backgroundColor: color }}></span>
              ))}
            </div>
            <span className="text-xl">{product.name}</span>
            <div className="flex items-center">
              {product.compareAtPrice ? (
                <>
                  <del className="text-gray-400 mr-2">${product.price}</del>
                  <span className="text-red-600">${product.compareAtPrice}</span>
                </>
              ) : <span className="text-black">${product.price}</span>
              }

            </div>

           
            <div className="flex gap-2">
            {
            (product.reviews !== null && product.reviewsCount!==null) &&
              <div className="flex gap-0.5">
                {
                  arr.map((_, index) => {
                    if (product.reviews! - index > 0.5) {
                      return <IoStar className="text-amber-500 w-5 h-5" />
                    } else if (product.reviews! - index < 0.5 && product.reviews! - index > 0) {
                      return <IoStarHalf className="text-amber-500 w-5 h-5" />
                    } else {

                      return <IoStarOutline className="text-amber-500 w-5 h-5" />
                    }

                  }
                  
                  )
                }
                
              </div>
            }
            { product.reviewsCount!==null && <span className="">{product.reviewsCount} Reviews</span>}
            </div>
          </div>


        ))

      }


    </div>
  )
}
export default ProductLists