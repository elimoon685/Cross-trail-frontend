
import SiderHover from "@/component/shop/sideHover";
import { menuData } from "@/data/hoverCol";
import ShiftImg from "@/component/shop/shiftImg";
import SquareLink from "@/component/shop/squareLink";
import BrandShift from "@/component/shop/brandShlft";
import SquareCategory from "@/component/shop/squareCategory";
const ShopPage=()=>{

    return (
        <>
        <div className="flex mx-auto max-w-7xl w-full h-100 mt-10 flex-wrap lg:flex-nowrap">
        <div className="hidden bg-black lg:flex lg:flex-col">
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
        </>
    )
}
export default ShopPage