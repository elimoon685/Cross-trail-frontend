'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";
const imgUrl = ["/clothes.jpg", "/tool.jpg", "/pack.jpg", "/tent.jpg"]
const ShiftImg = () => {
    const router = useRouter()
    const [index, setIndex] = useState<number>(0)
    const [hover, setHover] = useState<boolean>(false)
    useEffect(() => {
        if (hover) return;
        const timer = window.setInterval(() => setIndex(i => (i + 1) % imgUrl.length), 2000)
        return () => clearInterval(timer)

    }, [router, hover])

    const next = () => setIndex(i => (i + 1) % imgUrl.length);
    const pre = () => setIndex(i => (i + imgUrl.length - 1) % imgUrl.length);
    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false)
    return (
        <div className="relative" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <Image src={imgUrl[index]} alt={imgUrl[index].toUpperCase()} width={400} height={300} className="transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-y-40 left-0 w-[5%] bg-gray-300 border border-black border-l-0 rounded-r-3xl">

            </div>
            <div className="absolute inset-y-40 right-0 w-[5%] bg-gray-300 border border-black border-r-0 rounded-l-3xl">

            </div>
            <div className="absolue inset-0 gray"></div>
            <MdOutlineArrowForwardIos className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={next}
            />
            <MdOutlineArrowBackIosNew className="absolute left-0 top-[50%] -translate-y-1/2 cursor-pointer"
                onClick={pre}
            />
            <div className="absolute top-[90%] flex gap-2 z-10 left-[10%]">
            {imgUrl.map((_, i)=>
             <button 
             key={i}
             onClick={() => setIndex(i)}
             className={`h-2 w-2  rounded-full transition-all duration-300 cursor-pointer ${i===index ? "w-4 bg-[#345975] drop-shadow-md": "w-2 bg-white"}`}>
             </button>
            )}
           </div>
        </div>
    )
}
export default ShiftImg