import HoverCol from "./hoverCol"

import { Props } from "@/interface/menuData";


const SiderHover = ({ data }: Props) => {
  const [categoryName, items] = Object.entries(data)[0];
  return (

    <ul>
      <li className="group relative text-2xl pl-4 pr-8 py-4 font-bold text-white hover:bg-white hover:text-black hover:font-bold">{categoryName}
        <ul className="absolute flex flex-col flex-wrap left-[100%]99776 top-0  opacity-0 -translate-x-10 pointer-events-none group-hover:flex group-hover:flex-col group-hover:flex-wrap group-hover:translate-x-0 transform transition-transform duration-300 group-hover:opacity-100 group-hover:pointer-events-auto  bg-white gap-x-20 gap-y-10 w-[900px] h-[600px] px-10 py-10 z-50">

          {items.map((item, idx) => (
            <HoverCol key={idx} data={item} />

          ))
          }
        </ul>
      </li>
    </ul>
  )
}
export default SiderHover