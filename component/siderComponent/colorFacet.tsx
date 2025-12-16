"use client"
import { FacetOption } from "@/interface/fliterResponse"
import { useSearchParams, usePathname, useRouter} from "next/navigation"
type Props = {

    facetkey: string,
    options: FacetOption[],
    onChange:(key:string, value:string)=>void
  
  }

const ColorFacet=({facetkey, options, onChange}:Props)=>{
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selected = new Set(searchParams.getAll(facetkey));

const toggleColor=(value:string)=>{
    const params = new URLSearchParams(searchParams.toString());

    if(selected.has(value)){
        const next=[...selected].filter(v=>v!==value);
        params.delete(facetkey);
        next.forEach(v => params.append(facetkey, v));
        onChange(facetkey, value)
       }else {
        params.append(facetkey, value);
        onChange(facetkey, value)
    
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });



}
    return(
        <div className="px-2 flex flex-col mb-5 pb-5 gap-5 border-b border-black">
       <div className=""><span className="text-xl font-bold">{facetkey}</span></div>

       <div className="flex flex-wrap gap-3">
        {
            options.map((color, idx)=>(
            <div key={idx} className="flex">
            
            <input type="checkbox" 
                   className="sr-only" 
                   id={color.name} 
                   name={color.name+"color-selector"} 
                   checked={selected.has(color.name)}
                   onChange={()=>toggleColor(color.name)}
                   value="1" />
            <label
            className="color-dot hover:scale-110 cursor-pointer" 
            htmlFor={color.name}
            style={{ backgroundColor: color.name,
                ['--dot-color' as string]: color.name,
            }} >

            </label>
            </div>
            ))

        }
       </div>
       </div>

        
    )
}
export default ColorFacet