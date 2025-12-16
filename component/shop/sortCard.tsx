'use client'
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
type SelectedSort={
    sort:string
}

type Props={

    data:string[],
    selectedsort:SelectedSort,
    setSort:React.Dispatch<React.SetStateAction<SelectedSort>>,
    setOpenSort:React.Dispatch<React.SetStateAction<boolean>>,
    cardRef: React.RefObject<HTMLDivElement |null>;
    

}
const SortCard=({data, selectedsort, setSort, setOpenSort, cardRef}:Props)=>{

return (

    <div className="absolute flex flex-col gap-2 -top-[30%] bg-[#DCEFF2] rounded-lg max-w-50 w-full py-2 opacity-95"
         ref={cardRef}
    >
        {
          data.map((item, index)=>(
             <li key={index} className="px-2 py-1 hover:bg-[#5D9787] hover:text-white flex items-center gap-2 mx-1 rounded-lg "
                 onClick={()=>{setSort({sort:item}), setOpenSort(false)}}
             >
                <GiCheckMark className={`${selectedsort.sort===item ? "opacity-100":"opacity-0"}`}/><span>{item}</span></li> 
          ))

        }
        
    </div>
)

}
export default SortCard


