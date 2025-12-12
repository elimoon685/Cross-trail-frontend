'use client'
import { useState } from "react"
import ShopFliter from "../siderComponent/shopFliter"
import ProductLists from "./productLists";
import { MocData } from "@/interface/fliterResponse";
type Props = {
  data: MocData
}
type SelectedFacets = {
  [key: string]: string | string[];
};
  

const ShopClientView = ({ data }: Props) => {
const [openFilter, setOpenFilter]=useState<boolean>(false)

const [selectedQuery, setSelectedQuery]=useState<SelectedFacets>({});


const handleDesktopFacetChange =(key:string, value:string)=>{
console.log("key", key, "value", value)
setSelectedQuery(prev=>({...prev, [key]:value}))

}
const clearAllSelectedFilter=()=>{


}
const handleMobileFacetChange =(key:string, value:string)=>{

  setSelectedQuery(prev=>({...prev, [key]:value}))
  
}
  return (

    <div className="flex gap-5 grow">
      <ShopFliter data={data} onChange={handleDesktopFacetChange} applyFilter={selectedQuery} variant="desktop"/>
      <div className="flex flex-col grow mr-20 mt-10">
        <div className="flex justify-between">
         <div className="flex border-black border max-w-[300px] w-full">
         <button className="w-full px-2 py-2 relative flex items-center justify-between
           after:content-['+'] after:inline-block"
           onClick={()=>setOpenFilter(prev=>!prev)}>
            Filter By
         </button>
        </div>
        <div className="flex border-black border max-w-[300px] w-full">
        <button className="w-full px-2 py-2 relative flex items-center justify-between
           after:content-['▾'] after:inline-block">
            Sorted by 
         </button>
        </div>
        <div className={`fixed top-0 right-0 min-h-screen w-[400px] bg-white transform transition-transform duration-500 ${openFilter ? "translate-x-0" : "translate-x-full"} z-999`}>

        </div>
        {openFilter && (
    <div className="fixed inset-0 bg-black/40"
      onClick={()=>setOpenFilter(false)}>

    </div>
        )}
      </div>
      <div>
      <ProductLists />
      </div>
      </div>
    </div>
  )

}
export default ShopClientView