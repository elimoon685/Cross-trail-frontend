"use client"
import { ProductColor } from "@/interface/productList";
import { useRef } from "react";
import Image from "next/image";
import { useState,useEffect} from "react";
type ImgShiftProps={

    data:ProductColor,
    scrollColor:string,
    setShoppingCartImg:React.Dispatch<React.SetStateAction<string>>
}
const ImgShift=({data, scrollColor, setShoppingCartImg}:ImgShiftProps)=>{
    const color=Object.keys(data);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const listRef = useRef<HTMLDivElement | null>(null);
    const firstValue=color[0]
    const [selectedImg, setSelectedImg]=useState<string>(data[firstValue][0])
    
    useEffect(()=>{
        const el=sectionRefs.current[scrollColor];
        const container = listRef.current;
        if (!container || !el) return;
        
        if (container.scrollHeight <= container.clientHeight) {
            setSelectedImg(data[scrollColor][0])
            setShoppingCartImg(data[scrollColor][0])
            return;
        }
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const nextTop = container.scrollTop + (elRect.top - containerRect.top);
        container.scrollTo({
            top: nextTop,
            behavior: "smooth",
          });
          setSelectedImg(data[scrollColor][0])
          setShoppingCartImg(data[scrollColor][0])
    },[scrollColor])

    return (

        <div className="flex gap-5">
            <div className="flex flex-col h-[600px] overflow-auto scrollbar-hide" ref={listRef}>
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
            <div className="min-w-0 flex-1">
           <Image src={`/${selectedImg}`} 
                  alt={selectedImg.toUpperCase()} 
                  width={600} 
                  height={600}
                  />
           </div>
        </div>

    )
}
export default ImgShift