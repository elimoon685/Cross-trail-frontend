'use client'
import { useState } from "react"
import ShopFliter from "../siderComponent/shopFliter"
import ProductLists from "./productLists";
import { MocData } from "@/interface/fliterResponse";
import { ProductsList } from "@/interface/productList";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef} from "react";
import { SortItem } from "@/data/productsFliter";
import SortCard from "./sortCard";
type Props = {
  data: MocData,
  productsList:ProductsList[],
}
type SelectedFacets = {
  [key: string]: string | string[];
};
type SelectedSort={
  sort:string;
}
const ShopClientView = ({ data, productsList}: Props) => {
const [openFilter, setOpenFilter]=useState<boolean>(false)

const [selectedQuery, setSelectedQuery]=useState<SelectedFacets>({});

const [openSort, setOpenSort]=useState<boolean>(false);

const [selectedSort, setSelectedSort]=useState<SelectedSort>({sort:"Sorted by"});

const cardRef = useRef<HTMLDivElement |null>(null);

useEffect(()=>{

  if (!openSort) return;
const onPointerDown=(e:PointerEvent)=>{
  const el = cardRef.current;
  if(!el) return;
  if(el.contains(e.target as Node)) return;
  setOpenSort(false)

}
document.addEventListener("pointerdown", onPointerDown)
return ()=>document.removeEventListener("pointerdown", onPointerDown)

}, [openSort])


useEffect(() => {
  if (openFilter) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [openFilter]);

const handleDesktopFacetChange =(key:string, value:string)=>{

  setSelectedQuery(prev=> {

    if (value === "") {
      const { [key]: _, ...rest } = prev;
      return rest;
    }
    if (key === "Price") {
      return { ...prev, [key]: [value] };
    }

    const prevValue=prev[key];
    if(!prevValue) return {...prev, [key]:[value]};

    if(Array.isArray(prevValue)){

      if(prevValue.includes(value)){

        const nextArr =prevValue.filter(v=>v!==value)

        if(nextArr.length===0){

          const {[key]:_, ...rest}=prev

          return rest
        }

        return {
          ...prev, [key]:nextArr
        }
      }
        return {
        ...prev,
        [key]: [...prevValue, value],
      };
    }
    return {
      ...prev,
      [key]: [prevValue, value],
    };

    }
 )


}

  return (

    <div className="flex justify-between grow px-3 md:px-0 md:gap-5">
      <ShopFliter data={data} onChange={handleDesktopFacetChange} applyFilter={selectedQuery} setSelectedQuery={setSelectedQuery} variant="desktop"/>
      <div className="flex flex-col grow mr-0 mt-10 md:mr-20 ">
        <div className="flex justify-between md:justify-end">
         <div className="flex border-black border max-w-[300px] w-full md:hidden self-end">
         <button className="w-full px-2 py-2 relative flex items-center justify-between
           after:content-['+'] after:inline-block"
           onClick={()=>setOpenFilter(prev=>!prev)}>
            Filter By
         </button>
        </div>
        <div className="flex border-black border max-w-[300px] w-full relative">
        <button className="w-full px-2 py-2 flex items-center justify-between
           after:content-['▾'] after:inline-block"
           onClick={()=>setOpenSort(prev=>!prev)}>
           
            {selectedSort.sort}
         </button>
         {openSort && 
         <SortCard data={SortItem} selectedsort={selectedSort} setSort={setSelectedSort} setOpenSort={setOpenSort} cardRef={cardRef}/>
         }
        </div>
        <div className={`fixed top-0 flex flex-col right-0 h-screen w-[400px] bg-white transform transition-transform duration-500 ${openFilter ? "translate-x-0" : "translate-x-full"} z-999`}>
        <div className="flex-1 overflow-auto">
        <div className="flex mb-10 border-b-2 border-gray-200 justify-end">
         <span className="px-3 py-2"><RxCross2 className="w-7 h-7" onClick={()=>{setOpenFilter(false)}} /></span>
        </div>
        <ShopFliter data={data} onChange={handleDesktopFacetChange} applyFilter={selectedQuery} setSelectedQuery={setSelectedQuery} variant="mobile"/>
        </div>
        </div>
        {openFilter && (
    <div className="fixed inset-0 bg-black/40"
      onClick={()=>setOpenFilter(false)}>

    </div>
        )}
      </div>
      <div>
      <ProductLists data={productsList} />
      </div>
      </div>
    </div>
  )

}
export default ShopClientView