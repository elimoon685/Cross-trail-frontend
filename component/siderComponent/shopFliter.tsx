
import NormalFacet from "./normalFacet"
import PriceFacet from "./priceFacet"
import ColorFacet from "./colorFacet"
import { MocData } from "@/interface/fliterResponse"
import ReviewFacet from "./ReviewFacet"
import ShowSelectedFilter from "./showSelectedFilter"
type SelectedFacets = {[key: string]: string | string[];}
type Props = {
  data: MocData,
  applyFilter:SelectedFacets,
  onChange:(key:string, value:string)=>void,
  variant?:"desktop" | "mobile";
}
const ShopFliter = ({ data, applyFilter, onChange}: Props) => {


  return (
    <div className="bg-[#DCEFF2] max-w-70 ml-10 mt-30 pt-5 px-3 flex flex-col">
       
       <ShowSelectedFilter data={applyFilter}/>
      
      {
        Object.entries(data).map(([facetkey, options]) => {

          if (facetkey === "Price") {
            return (
              <PriceFacet key={facetkey} facetkey={facetkey} options={options} onChange={onChange} />
            );
          }
          if (facetkey === "Color") {

            return (
              <ColorFacet key={facetkey} facetkey={facetkey} options={options} />
            )
          }
          if (facetkey === "Reviews") {
            return (
              <ReviewFacet key={facetkey} facetkey={facetkey} options={options} />
            )
          }

          return (
            <NormalFacet key={facetkey} facetkey={facetkey} options={options} onChange={onChange} />
          )
        })
      }



    </div>
  )
}
export default ShopFliter