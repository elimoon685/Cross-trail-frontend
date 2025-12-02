import ShopHeader from "@/component/shopHeader"
import SiderHover from "@/component/shop/sideHover";
import { menuData } from "@/data/hoverCol";
const ShopPage=()=>{

    return (
        <>
        <ShopHeader/>
        <div className="flex mx-auto max-w-7xl w-full h-100 bg-amber-200">
        <div className="flex flex-col">
            {menuData.map((ca, idx)=>
         <SiderHover key={idx} data={ca}/>
            )
            }
        </div>
        <div>

        </div>
        </div>
        </>
    )
}
export default ShopPage