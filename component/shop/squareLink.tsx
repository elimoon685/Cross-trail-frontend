import Link from "next/link"
const SquareLink=()=>{

return (
    <div className="h-[400px] w-[400px] relative">
      <div className="absolute flex justify-center items-center top-0 right-0 left-0 h-[125px] bg-[#345975] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
      <Link href={`/shop/collection/best-seller`}>
        <span className="text-black group-hover/seller:text-white text-3xl ">Best seller</span>
        </Link>
      </div>
     <div className="absolute flex justify-center items-center top-[125px] left-0 w-[250px] h-[150px] bg-[#DCEFF2] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
     <Link href={`/shop/collection/sale`}>
     <span className="text-black group-hover/seller:text-white text-3xl">Sale</span>
     </Link>
     </div>
     <div className="absolute flex justify-center items-center top-[125px] left-[250px] w-[150px] h-[150px] bg-[#FF3B30] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
     <Link href={`/shop/collection/new`}>
     <span className="text-black group-hover/seller:text-white text-3xl">New</span>
     </Link>
     </div>
     <div className="absolute flex justify-center items-center top-[275px] left-0 right-0 h-[125px] bg-[#5D9787] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
     <Link href={`/shop/collection/gift-guid`}>
     <span className="text-black group-hover/seller:text-white text-3xl">Gift Guid</span>
     </Link>
     </div>
    </div>

)

}
export default SquareLink