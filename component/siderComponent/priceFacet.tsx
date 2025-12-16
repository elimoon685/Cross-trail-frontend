'use client'
import { FacetOption } from "@/interface/fliterResponse";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect} from "react";
type Props = {

  facetkey: string,
  options: FacetOption[],
  onChange:(key:string, value:string)=>void,

}
const PriceFacet = ({ facetkey, options, onChange}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const DEFAULT_MIN=Number(options[0].name);
  const DEFAULT_MAX=Number(options[1].name);

  const TICK_COUNT = 4; 

  useEffect(() => {
    const price = searchParams.get("Price");
    const [nextMin, nextMax] = price
      ? price.split(":").map(Number)
      : [DEFAULT_MIN, DEFAULT_MAX];
  
    setMin(nextMin);
    setMax(nextMax);
    setInputMin(String(nextMin));
    setInputMax(String(nextMax));
  }, [searchParams, DEFAULT_MIN, DEFAULT_MAX]);

const ticks = Array.from({ length: TICK_COUNT + 1 }, (_, i) => {
  const ratio = i / TICK_COUNT; // 0, 0.25, 0.5, 0.75, 1
  return Math.round(DEFAULT_MIN + (DEFAULT_MAX - DEFAULT_MIN) * ratio);
});

  const urlMin = Number(searchParams.get("Price")?.split(":")[0] ?? DEFAULT_MIN);
  const urlMax = Number(searchParams.get("Price")?.split(":")[1] ?? DEFAULT_MAX);
  const [min, setMin]=useState<number>(urlMin);
  const [max, setMax]=useState<number>(urlMax);

  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null);

  const [inputMin, setInputMin]=useState<string>(String(urlMin));
  const [inputMax, setInputMax]=useState<string>(String(urlMax));

  const applyToUrl = (rangeValue:string) => {
    const nextMin=Number(rangeValue.split(":")[0]);
    const nextMax=Number(rangeValue.split(":")[1]);
    const params = new URLSearchParams(searchParams.toString());
    if (nextMin <= DEFAULT_MIN && nextMax >= DEFAULT_MAX) {
      params.delete("Price");
      onChange(facetkey, ''); 
    } else {
      params.set("Price", rangeValue);
      onChange(facetkey, rangeValue)
  }
  router.replace(
    `${pathname}?${params.toString()}`,
    { scroll: false }
  );
}
 const handleMaxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
  const value = Number(e.target.value);
  const nextMax = Math.max(value, min);
  setMax(nextMax);
  setInputMax(String(nextMax));
 }

 const handleMinChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
  
  const value = Number(e.target.value);
  const nextMin = Math.min(value, max);
  setMin(nextMin);
  setInputMin(String(nextMin));
 }

 const handleMinBlur=(e: React.FocusEvent<HTMLInputElement>)=>{
  const raw = Number(inputMin);
  if (Number.isNaN(raw)) {
    setInputMin(String(min));
    return;
  }
  const fixed = Math.min(Math.max(raw, DEFAULT_MIN), max);
  setMin(fixed);                  
  setInputMin(String(fixed)); 
  const rangeValue:string=fixed +":"+max;
  applyToUrl(rangeValue);


 }
 const handleMaxBlur=(e: React.FocusEvent<HTMLInputElement>)=>{

  const raw = Number(inputMax);
  if (Number.isNaN(raw)) {
    setInputMin(String(max));
    return;
  }
  const fixed = Math.max(Math.min(raw, DEFAULT_MAX), min);
  setMax(fixed);                  
  setInputMax(String(fixed)); 
  const rangeValue:string=min +":"+fixed;
  applyToUrl(rangeValue);


 }
 const commitSlider=()=>{
  const rangeValue:string=min +":"+max;
  applyToUrl(rangeValue);

 }

  return (
    <div className="px-2 flex flex-col mb-5 pb-5 gap-5 border-b border-black">
       <div className=""><span className="text-xl font-bold">{facetkey}</span></div>
      <div className="flex gap-2 self-center">
      <input 
      className="border-2 border-[#5D9787] w-25 rounded-sm px-2 py-1 outline-[#5dbaa0]"
      value={inputMin}
     onChange={(e)=>setInputMin(e.target.value)}
      onBlur={handleMinBlur}
      />
      <span>-</span>
      <input 
      value={inputMax}
      onChange={(e)=>setInputMax(e.target.value )}
      onBlur={handleMaxBlur}
      className="border-2 border-[#5D9787] w-25 rounded-sm px-2 py-1 outline-[#5dbaa0]"/>

      </div>
      <div className="relative mt-2">
      <div className="absolute left-0 right-0 top-[27%] -translate-y-1/2 h-1 bg-gray-200 rounded" />

      <div
          className="absolute top-[27%] -translate-y-1/2 h-1 bg-black rounded"
          style={{
            left: `${((min - DEFAULT_MIN) / (DEFAULT_MAX - DEFAULT_MIN)) * 100}%`,
            right: `${100 - ((max - DEFAULT_MIN) / (DEFAULT_MAX - DEFAULT_MIN)) * 100}%`,
          }}
        />

  

  <input
    type="range"
    min={DEFAULT_MIN}
    max={DEFAULT_MAX}
    value={max}
    onChange={handleMaxChange}
    onMouseUp={commitSlider}
    onTouchEnd={commitSlider}
    onMouseDown={() => setActiveThumb('max')}
    className={`double-range absolute right-0 left-0 w-full bg-transparent appearance-none ${activeThumb === 'max' ? "z-20" : "z-10"} ` }
  />

<input
    type="range"
    min={DEFAULT_MIN}
    max={DEFAULT_MAX}
    value={min}
    onChange={handleMinChange}
    onMouseUp={commitSlider}
    onTouchEnd={commitSlider}
    onMouseDown={() => setActiveThumb('min')}
    className={`double-range absolute right-0 left-0 w-full bg-transparent appearance-none  ${activeThumb === 'min' ? "z-20" : "z-10"}`}
  />
  {/* {ticks.map((t) => (
    <div
      key={t}
      className="absolute top-full -translate-y-1/2 w-px h-3 bg-black"
      style={{
        left: `${((t - DEFAULT_MIN) / (DEFAULT_MAX - DEFAULT_MIN)) * 100}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  ))} */}

<div className="mt-5 flex justify-between text-xs">
        {ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
</div>

    </div>
  )
}
export default PriceFacet
