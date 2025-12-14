'use client'
import { RxCross2 } from "react-icons/rx";
type SelectedFacets = {[key: string]: string | string[];}
type Props={
    data:SelectedFacets,
    onRemove:(key:string, value:string)=>void,
    onDelete:(key:string, value:string)=>void,
    clearAll:()=>void,
}

const ShowSelectedFilter = ({data, onRemove, onDelete, clearAll}:Props) => {

    const isEmpty = Object.keys(data).length === 0;
    if (isEmpty) return null;

    return (
        
        <div className="flex flex-col mb-5 pl-2" >
        <div className="flex justify-between mb-4">
        <span className="text-xl font-bold">Refine by</span>
        <span className="cursor-pointer hover:font-bold" onClick={clearAll}>Clear all</span>
        </div>
        <div className="flex flex-col border-b border-black pb-5 gap-2">
        {Object.entries(data).flatMap(([key, value])=>{
             const values = Array.isArray(value) ? value : [value];
             return values.map(v => 
             <div className="flex justify-between items-center">
             <span key={`${key}-${v}`} className="" >{key}: {v}</span>
             <RxCross2 className="" onClick={()=>{onRemove(key, v), onDelete(key,v)}} />
             </div>
             );
        })
        }
        </div>
        </div>
    )
   
    
}
export default ShowSelectedFilter