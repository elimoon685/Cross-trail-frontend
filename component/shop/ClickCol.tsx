import { CategoryGroup } from "@/interface/menuData"

type Props = {

    data: CategoryGroup
}
const ClickCol = ({ data }: Props) => {
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

        </div>
    )

}
export default ClickCol