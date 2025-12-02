
type CategoryMap = Record<string, string[]>;

type Props = {
  data: CategoryMap;
};
const HoverCol=({data}:Props)=>{
    const [categoryName, items] = Object.entries(data)[0];
    return (
        <li className=""><span>{categoryName}</span>
        <ul className="flex flex-col gap-3 mt-3">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm whitespace-nowrap hover:text-[#FF3B30]">
            {item}
          </li>
        ))}
        </ul>

        </li>
    )
}
export default HoverCol