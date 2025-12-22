"use client"
import { ProductColor } from "@/interface/productList";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
type ImgShiftProps={

    data:ProductColor
}
const ImgShift=({data}:ImgShiftProps)=>{
    const color=Object.keys(data);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const firstValue=color[0]
    const [selectedImg, setSelectedImg]=useState<string>(data[firstValue][0])
    
    

    return (

        <div className="flex gap-5">
            <div className="flex flex-col h-[600px] overflow-auto scrollbar-hide">
            {

            color.map(color=>(
            <div className=""
            key={color}
            ref={(node)=>{sectionRefs.current[color]=node}}
            >
            {

                data[color].map((src, index)=>(

                <Image
                key={`${color}-${src}-${index}`}
                src={`/${src}`}
                width={100}
                alt={src.toUpperCase()}
                height={100}
                className={`mb-5 ${src===selectedImg && "border-2 border-black"}`}
                onClick={()=>setSelectedImg(src)}
                >
                </Image>
                ))
            }

            </div>


            ))


            }

            </div>
           <Image src={`/${selectedImg}`} alt={selectedImg.toUpperCase()} width={600} height={600}/>
        </div>

    )
}
export default ImgShift