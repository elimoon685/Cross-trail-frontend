const SquareLink=()=>{

return (
    <div className="h-100 w-100 relative">
      <div className="absolute flex justify-center items-center top-0 right-0 left-0 h-[125px] bg-[#345975] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
        <span className="text-black group-hover/seller:text-white text-3xl ">Best seller</span>
      </div>
     <div className="absolute flex justify-center items-center top-[125px] left-0 w-[250px] h-[150px] bg-[#DCEFF2] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
     <span className="text-black group-hover/seller:text-white text-3xl">Sale</span></div>
     <div className="absolute  flex justify-center items-center top-[125px] left-[250px] right-0 h-[150px] bg-[#FF3B30] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
     <span className="text-black group-hover/seller:text-white text-3xl">New</span>
     </div>
     <div className="absolute flex justify-center items-center top-[275px] left-0 right-0 h-[125px] bg-[#5D9787] hover:bg-black transition-colors duration-300 ease-in-out group/seller border-2 border-white">
     <span className="text-black group-hover/seller:text-white text-3xl">Gift Guid</span>
     </div>
    </div>

)

}
export default SquareLink