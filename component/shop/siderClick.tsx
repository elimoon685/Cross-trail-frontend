
import { RootCategory } from "@/interface/menuData";
import ClickCol from "./ClickCol";
type SiderClickProps = {
  data: RootCategory;
  idx: number;   // 从 map 里传进来
};

const SiderClick = ({ data, idx }: SiderClickProps) => {

  const [categoryName, items] = Object.entries(data)[0];
  const id = `main-${categoryName}-${idx}`;
  return (
    <div className="flex flex-col relative">
      
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
      />
      <label htmlFor={id}>
        <span className="text-2xl font-bold ml-3 ">{categoryName}</span>
      </label>
      <span className="absolute left-[90%] top-[0.5%] transition-transform duration-300 peer-checked:rotate-180 ">▾</span>
      <div className="flex flex-col gap-3 opacity-0 peer-checked:opacity-100 max-h-0 peer-checked:max-h-screen overflow-hidden transition-all duration-500 mb-5 mt-5">
     {
      items.map((item, subIndex)=>(
       <ClickCol key={subIndex} data={item} parentKey={categoryName} index={subIndex}/>
      ))
     }
     </div>


    </div>
  )

}
export default SiderClick