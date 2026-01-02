'use client'
import { useState, useEffect} from "react";
import Link from "next/link";
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

    <div className="w-[300px] h-[400px] bg-white p-3 overflow-hidden ">
      <div
        className="flex flex-col justify-between grow items-center h-full"
      >
        {visibleContent.map(({id, Icon, className }) => (
         <Link key={id} href={`/shop/collection/${id}`}>
          <Icon  className={className}/>
          </Link>
        ))}
      </div>
    </div>
)

}
export default BrandShift
