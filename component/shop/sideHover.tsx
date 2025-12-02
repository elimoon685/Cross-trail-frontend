import HoverCol from "./hoverCol"

import { Props } from "@/interface/menuData";


const SiderHover=({data}:Props)=>{
    const [categoryName, items] = Object.entries(data)[0];
    return (

        <ul>
            <li className="group relative text-2xl px-2 py-1 font-bold text-white hover:bg-white hover:text-black hover:font-bold">{categoryName}
             <ul className="absolute hidden left-full top-0  group-hover:flex group-hover:flex-col group-hover:flex-wrap bg-white gap-x-20 gap-y-10 w-[900px] h-[600px] px-10 py-10 z-50">

            {items.map((item, idx)=>(
             <HoverCol key={idx} data={item}/>

            ))
            }
             </ul>
             </li>
        </ul>
    )
}
export default SiderHover