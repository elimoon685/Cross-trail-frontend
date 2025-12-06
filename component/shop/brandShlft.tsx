'use client'
import { useState, useEffect} from "react";

import { BrandList } from "@/data/svgArray";

const BrandShift=()=>{
const [index, setIndex]=useState<number>(0)

useEffect(()=>{
const timer=setInterval(()=>setIndex(prev=>(prev+1) % BrandList.length), 2000)
return () => clearInterval(timer)
},[])

const size=4
const visibleContent=[];
for(let i=0; i<size; i++){
    visibleContent.push(BrandList[(index + i) % BrandList.length])
}
return (

    <div className="flex flex-col max-w-[320px] w-full bg-white p-3 overflow-hidden">
      <div
        className="flex flex-col justify-between grow items-center"
      >
        {visibleContent.map(({id, Icon, className }) => (
          <Icon key={id} className={className}/>
        ))}
      </div>
    </div>
)

}
export default BrandShift
