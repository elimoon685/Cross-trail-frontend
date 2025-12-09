'use client'
import { FacetOption } from "@/interface/fliterResponse";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
type Props = {

  facetkey: string,
  options: FacetOption[],

}
const PriceFacet = ({ facetkey, options }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const DEFAULT_MIN=Number(options[0].name);
  const DEFAULT_MAX=Number(options[1].name);

  const TICK_COUNT = 4; // 中间 3 个 + 2 端 = 5 个数字

const ticks = Array.from({ length: TICK_COUNT + 1 }, (_, i) => {
  const ratio = i / TICK_COUNT; // 0, 0.25, 0.5, 0.75, 1
  return Math.round(DEFAULT_MIN + (DEFAULT_MAX - DEFAULT_MIN) * ratio);
});
  const urlMin = Number(searchParams.get("priceMin") ?? DEFAULT_MIN);
  const urlMax = Number(searchParams.get("priceMax") ?? DEFAULT_MAX);

  const [min, setMin]=useState<number>(urlMin);
  const [max, setMax]=useState<number>(urlMax);

 const handleMaxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
  const value = Number(e.target.value);
  const nextMax = Math.max(value, min); // 不超过右边
  setMax(nextMax);
 }
 const handleMinChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
  
  const value = Number(e.target.value);
  const nextMin = Math.min(value, max); // 不超过右边
  setMin(nextMin);
 }
 const commitSlider=()=>{
  const params = new URLSearchParams(searchParams.toString());
  params.set("priceMin", String(min));
  params.set("priceMax", String(max));
  router.replace(`${pathname}?${params.toString()}`, { scroll: false });

 }

  return (
    <div className="px-2 flex flex-col mb-5 pb-5 gap-5 border-b border-black">
       <div className=""><span className="text-xl font-bold">{facetkey}</span></div>
      <div className="flex gap-2">
      <input 
      className="border-2 border-[#5D9787] w-25 rounded-sm"
      
      onChange={()=>{}}
      />
      <span>-</span>
      <input className="border-2 border-[#5D9787] w-25 rounded-sm"/>

      </div>
      <div className="relative mt-2">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded" />

      <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-black rounded"
          style={{
            left: `${((min - DEFAULT_MIN) / (DEFAULT_MAX - DEFAULT_MIN)) * 100}%`,
            right: `${100 - ((max - DEFAULT_MIN) / (DEFAULT_MAX - DEFAULT_MIN)) * 100}%`,
          }}
        />

  <input
    type="range"
    min={DEFAULT_MIN}
    max={DEFAULT_MAX}
    value={min}
    onChange={handleMinChange}
    onMouseUp={commitSlider}
    onTouchEnd={commitSlider}
    className="w-full bg-transparent appearance-none relative"
  />

  <input
    type="range"
    min={DEFAULT_MIN}
    max={DEFAULT_MAX}
    value={max}
    onChange={handleMaxChange}
    onMouseUp={commitSlider}
    onTouchEnd={commitSlider}
    className="w-full bg-transparent appearance-none relative"
  />
  {ticks.map((t) => (
    <div
      key={t}
      className="absolute top-full -translate-y-1/2 w-px h-3 bg-black"
      style={{
        left: `${((t - DEFAULT_MIN) / (DEFAULT_MAX - DEFAULT_MIN)) * 100}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  ))}

<div className="mt-4 flex justify-between text-xs">
        {ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
</div>

    </div>
  )
}
export default PriceFacet
