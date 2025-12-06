
type CategoryMap = Record<string, string[]>;

type Props = {
  data: CategoryMap;
};
const HoverCol = ({ data }: Props) => {
  const [categoryName, items] = Object.entries(data)[0];
  return (
    <li className="relative group/sec">
      <span className="relative inline-block">{categoryName}
        <span className="
       absolute
      left-0
      -bottom-0.5
      h-0.5
      w-full
     bg-black
     origin-left
     scale-x-0
     transform
     transition-transform
     duration-500
     group-hover/sec:scale-x-100
              "></span>


      </span>
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