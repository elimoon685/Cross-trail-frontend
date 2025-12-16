'use client'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SiderClick from "./shop/siderClick";
import { menuData } from "@/data/hoverCol";
import { RxCross2 } from "react-icons/rx";
const ShopHeader=()=>{
    const [open, setOpen] = useState(false);
    const [openCategory, setOpenCategory]=useState(false)
return (
     <>
    <div className="bg-[#FF3B30] h-30 flex items-center px-10 gap-10">
        <h1 className="text-white font-bold text-5xl hidden sm:flex-1 sm:flex font-serif">CrossTrail</h1>
        <div className="relative flex flex-1">
        <input id="searchBar" className="py-2 px-3 max-w-[500px] border border-gray-300 grow  focus:outline-[#345975] rounded-3xl bg-white"
        placeholder="Search products"
        />
        <CiSearch className="absolute h-6 w-6 left-[85%] top-[20%]"/>
        </div>
        <div className="flex flex-1 justify-end gap-5">
        <FiMenu className="h-6 w-6 text-white cursor-pointer lg:hidden" onClick={()=>setOpenCategory(prev=>!prev)} />
        <FaShoppingCart className="h-6 w-6 text-white cursor-pointer" onClick={()=>setOpen(prev=>!prev)}/>
        </div>
    </div>
    <div className={`fixed top-0 right-0 min-h-screen w-[400px] bg-white transform transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"} z-999`}>
        
    </div>
    <div className={`fixed top-0 left-0 flex flex-col h-screen w-[400px] bg-white transform transition-transform duration-500 ${openCategory ? "translate-x-0" : "-translate-x-full"} z-999`} >
    <div className="flex flex-col overflow-auto">
        <div className="flex mb-10 border-b-2 border-gray-200 justify-end">
         <span className="px-3 py-2"><RxCross2 className="w-7 h-7" onClick={()=>{setOpenCategory(false)}} /></span>
        </div>
    {menuData.map((item, index)=>(
    
     <div className=""><SiderClick key={index} data={item} idx={index}/></div>

    ))}
    </div>
    </div>
    {(open || openCategory)  && (
    <div className="fixed inset-0 bg-black/40"
      onClick={()=>{setOpen(false); setOpenCategory(false)}}>

    </div>


    )}
    </>
)
    
}
export default ShopHeader