'use client'
import { FacetOption } from "@/interface/fliterResponse"
import { useSearchParams, usePathname, useRouter} from "next/navigation"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
type Props = {

    facetkey: string,
    options: FacetOption[],
    onChange:(key:string, value:string)=>void,
  }
const arr = Array.from({ length: 5 });

const ReviewFacet=({facetkey, options, onChange}:Props)=>{

    const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selected = new Set(searchParams.getAll(facetkey));
const toggleReviews=(value:string)=>{
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

return (
    <div className="px-2 flex flex-col mb-5 pb-5 gap-5 border-black">
       <div className=""><span className="text-xl font-bold">{facetkey}</span></div>
       <div className="max-h-70 overflow-y-auto thin-scrollbar">
        {
            options.map((review,index)=>(
             <label className="flex items-center gap-3 mb-2">
                <input
                type="checkbox"
                checked={selected.has(review.name)}
                onChange={() => {toggleReviews(review.name)}}
                className="w-4 h-4 accent-[#5D9787]"
                />
                <span className="flex gap-2">
                 {
                    arr.map((_, idx)=>{

                        if(idx < Number(review.name)){
                          return <FaStar className="text-amber-500 w-5 h-5" />
                        }
                        return <FaRegStar className="text-amber-500 w-5 h-5"/>
                    })
                 }
                 
                </span>
             </label>


            ))
        }
        </div>

   </div>
)

}
export default ReviewFacet