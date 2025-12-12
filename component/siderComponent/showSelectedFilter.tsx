'use client'
type SelectedFacets = {[key: string]: string | string[];}
type Props={
    data:SelectedFacets,
}

const ShowSelectedFilter = ({data}:Props) => {



    return (

        <div className="flex flex-col" >
        <div className="flex justify-between mb-4">
        <span className="text-xl font-bold">Refine by</span>
        <span>Clear all</span>
        </div>
        <div className="flex flex-col border-b border-black pb-5">
        {Object.entries(data).flatMap(([key, value])=>{
             const values = Array.isArray(value) ? value : [value];
             return values.map(v => 
             <span key={`${key}-${v}`} className="" >{key}:{value}</span>);
        })
        }
        </div>
        </div>
    )
}
export default ShowSelectedFilter