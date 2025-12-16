import { CategoryGroup } from "@/interface/menuData"

type Props = {
  data: CategoryGroup;
  parentKey: string;
  index: number;
}
const ClickCol = ({ data, parentKey, index}: Props) => {
  const [categoryName, items] = Object.entries(data)[0];
  const id = `sub-${parentKey}-${categoryName}-${index}`; 
  return (

    <div className="flex flex-col relative">
      
        <input
          type="checkbox"
          id={id}
          className="peer hidden"
        />
        <label htmlFor={id}>
          <span className="text-xl font-bold ml-5 mb-2">{categoryName}</span>
        </label>
        <span className="absolute left-[90%] top-[0.5%] transition-transform duration-300 peer-checked:rotate-180">▾</span>
     
      <div className="flex flex-col gap-2 mt-3 opacity-0 peer-checked:opacity-100 max-h-0 peer-checked:max-h-screen overflow-hidden transition-all duration-500 ">
     {items.map((item, index)=>(

       <span key={index} className="ml-5">{item}</span>

      ))
    }
      </div>
     
    </div>
  )

}
export default ClickCol