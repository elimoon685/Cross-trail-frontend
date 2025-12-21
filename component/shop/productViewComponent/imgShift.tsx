"use client"
import { ProductColor } from "@/interface/productList";
type ImgShiftProps={

    data:ProductColor
}
const ImgShift=({data}:ImgShiftProps)=>{
     
    const allImg=Object.values(data).flat();


    return (

        <div className="flex">
            <div className="flex flex-col">
                
            </div>
        </div>

    )
}
export default ImgShift