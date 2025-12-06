
import { Props } from "@/interface/menuData";
import ClickCol from "./ClickCol";
const SiderClick = ({ data }: Props) => {

  const [categoryName, items] = Object.entries(data)[0];
  return (
    <div className="flex flex-col">
      <input
        type="checkbox"
        id={categoryName}
        className="peer hidden"
      />
      <label htmlFor={categoryName}>
        <span>{categoryName}</span>
      </label>
      <span>▾</span>
     {
      items.map((item, index)=>(
       <ClickCol key={index} data={item} />
      ))
     }


    </div>
  )

}
export default SiderClick