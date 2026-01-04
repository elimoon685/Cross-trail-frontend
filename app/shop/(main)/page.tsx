
import SiderHover from "@/component/shop/sideHover";
import { menuData } from "@/data/hoverCol";
import ShiftImg from "@/component/shop/shiftImg";
import SquareLink from "@/component/shop/squareLink";
import BrandShift from "@/component/shop/brandShlft";
import SquareCategory from "@/component/shop/squareCategory";
const ShopPage=()=>{

    return (
        <div className="flex flex-col">
        <div className="flex flex-col mx-auto max-w-7xl items-center w-full mt-10 lg:flex-row lg:justify-between lg:items-stretch">
        <div className="hidden bg-black lg:flex-col lg:flex">
            {menuData.map((ca, idx)=>
         <SiderHover key={idx} data={ca}/>
            )
            }
            
        </div>
        <SquareLink/>
        <BrandShift/>
        <ShiftImg/>

        <div>
        </div>
        </div>
        <div className="flex mx-auto max-w-7xl w-full mt-20">
        <SquareCategory/>
        </div>
        </div>
    )
}
export default ShopPage