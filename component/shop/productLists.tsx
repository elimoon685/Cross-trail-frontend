import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { ProductsList } from "@/interface/productList";
import Link from "next/link";
import Image from "next/image";
type Props = {
  data: ProductsList[]
}
const arr = Array.from({ length: 5 });
const ProductLists = ({ data }: Props) => {


  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-10 mt-10 ml-10 mr-10">
      {
        data.map((product, index) => (
          <Link key={index} href={`/shop/product/${product.productId}`}>
          <div  className="flex flex-col h-[350px]  border-gray-300 border"

          >
            <div className="self-center">
             <Image src={`/${product.name}_1.png`} alt={product.name} width={200} height={200}></Image>
            </div>
            <div className="flex gap-2 self-start h-10 items-center pl-3">
              {product.color.map((color, idx) => (
                <span key={idx} className={`w-5 h-5 rounded-full border-gray-300 border hover:scale-110`} style={{ backgroundColor: color }}></span>
              ))}
            </div>
            <span className="flex h-8 items-center pl-3 font-bold ">{product.name}</span>
            <div className="flex items-center">
              {product.compareAtPrice ? (
                <div className="flex pl-3 h-10 items-center">
                  <del className="text-gray-400 mr-2">${product.price}</del>
                  <span className="text-red-600">${product.compareAtPrice}</span>
                </div>
              ) : <span className="text-black flex pl-3 h-10 items-center">${product.price}</span>
              }

            </div>

           
            <div className="flex gap-2 pl-3">
            {
            (product.reviews !== null && product.reviewsCount!==null) &&
              <div className="flex gap-0.5">
                {
                  arr.map((_, index) => {
                    if (product.reviews! - index > 0.5) {
                      return <IoStar key={index} className="text-amber-500 w-4 h-4" />
                    } else if (product.reviews! - index < 0.5 && product.reviews! - index > 0) {
                      return <IoStarHalf key={index} className="text-amber-500 w-4 h-4" />
                    } else {

                      return <IoStarOutline key={index} className="text-amber-500 w-4 h-4" />
                    }

                  }
                  
                  )
                }
                
              </div>
            }
            { product.reviewsCount!==null && <span className="text-sm">{product.reviewsCount} Reviews</span>}
            </div>
          </div>
          </Link>

        ))

      }


    </div>
  )
}
export default ProductLists