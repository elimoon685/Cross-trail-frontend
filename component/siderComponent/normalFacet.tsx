'use client'
import { FacetOption } from "@/interface/fliterResponse";
import { useSearchParams, usePathname, useRouter} from "next/navigation"

type Props = {

  facetkey: string,
  options: FacetOption[],
  onChange:(key:string, value:string)=>void

}
const NormalFacet = ({ facetkey, options, onChange}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selected = new Set(searchParams.getAll(facetkey));

  const toggle=(value:string)=>{
    const params = new URLSearchParams(searchParams.toString());

   if(selected.has(value)){
    const next=[...selected].filter(v=>v!==value);
    params.delete(facetkey);
    next.forEach(v => params.append(facetkey, v));
    onChange(facetkey, value);
   }else {
    params.append(facetkey, value);
    onChange(facetkey, value);

  }
  router.replace(`${pathname}?${params.toString()}`, { scroll: false });


  }
  return (
    <div className="px-2 flex flex-col mb-5 pb-5 gap-5 border-b border-black last:border-b-0">
      <div className=""><span className="text-xl font-bold">{facetkey}</span></div>
      <div className="max-h-70 overflow-y-auto thin-scrollbar">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              checked={selected.has(opt.name)}
              onChange={() => {toggle(opt.name)}}
              className="w-4 h-4 accent-[#5D9787]"
            />
            <span className="text-xl">
              {opt.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
export default NormalFacet