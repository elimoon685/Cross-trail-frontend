
import NormalFacet from "./normalFacet"
import PriceFacet from "./priceFacet"
import ColorFacet from "./colorFacet"
import { MocData } from "@/interface/fliterResponse"
type Props = {
    data: MocData
}
const ShopFliter = ({ data }: Props) => {


    return (
        <div className="bg-[#DCEFF2] w-70 ml-10 mt-10 pt-5 px-3">

            {
                Object.entries(data).map(([facetkey, options]) => {

                    if (facetkey === "Price") {
                        return (
                        <PriceFacet key={facetkey} facetkey={facetkey} options={options}/>
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