'use client'
import { FacetOption } from "@/interface/fliterResponse"
type Props={

    facetkey:string,
    options:FacetOption[],

}
const NormalFacet=({facetkey, options}:Props)=>{


    return(
        <div className="max-h-100 overflow-auto px-2 flex flex-col">
            <div>{facetkey}</div>
            <div>
            {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={false}
            onChange={() =>{}}
          />
          <span>
            {opt.name} ({opt.count})
          </span>
        </label>
      ))}
            </div>
        </div>
    )
}
export default NormalFacet