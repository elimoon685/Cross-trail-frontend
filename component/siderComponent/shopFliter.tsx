
import NormalFacet from "./normalFacet"
import PriceFacet from "./priceFacet"
import ColorFacet from "./colorFacet"
import { MocData } from "@/interface/fliterResponse"
type Props = {
    data: MocData
}
const ShopFliter = ({ data }: Props) => {


    return (
        <div className="bg-[#DCEFF2] w-60 h-screen ml-10 mt-10">

            {
                Object.entries(data).map(([facetkey, options]) => {

                    if (facetkey === "Price") {
                        return (
                        <PriceFacet key={facetkey}/>
                    );
                    }
                    if(facetkey==="Color"){

                        return (
                       <ColorFacet  key={facetkey}/>
                        )
                    }

                    return (
                       <NormalFacet key={facetkey} facetkey={facetkey} options={options}/>
                    )
                })
            }



        </div>
    )
}
export default ShopFliter