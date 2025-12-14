'use client'
import NormalFacet from "./normalFacet"
import PriceFacet from "./priceFacet"
import ColorFacet from "./colorFacet"
import { MocData } from "@/interface/fliterResponse"
import ReviewFacet from "./ReviewFacet"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import ShowSelectedFilter from "./showSelectedFilter"
type SelectedFacets = { [key: string]: string | string[]; }
type Props = {
  data: MocData,
  applyFilter: SelectedFacets,
  onChange: (key: string, value: string) => void,
  setSelectedQuery: React.Dispatch<React.SetStateAction<SelectedFacets>>
  variant?: "desktop" | "mobile";
}
const ShopFliter = ({ data, applyFilter, onChange, setSelectedQuery }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();


  const removeQueryValue = (facetKey: string, value: string) => {

    const params = new URLSearchParams(searchParams.toString());
    const next = params.getAll(facetKey).filter(v => v !== value);

    params.delete(facetKey);
    next.forEach(v => params.append(facetKey, v));

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

  }

  const deleteSelectedFilter = (key: string, value: string) => {
    setSelectedQuery(prev => {

      const prevValue = prev[key];
      if (!prevValue) return prev;
      if (!Array.isArray(prevValue)) return prev;
      if (!prevValue.includes(value)) return prev;

      const nextArr = prevValue.filter(v => v !== value)
      if (nextArr.length === 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev, [key]: nextArr
      }
    })

  }

  const clearAllSelectedFilter=()=>{

  setSelectedQuery(prev=>({}))
  router.replace(pathname, { scroll: false });
  }


  return (
    <div className="bg-[#DCEFF2] max-w-70 ml-10 mt-30 pt-5 px-3 flex flex-col">

      <ShowSelectedFilter data={applyFilter} 
      onRemove={removeQueryValue} 
      onDelete={deleteSelectedFilter}
      clearAll={clearAllSelectedFilter}
      />

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