import { ReadonlyURLSearchParams } from "next/navigation";

type SelectedFacets = { [key: string]: string | string[]; }

const parseFilterState=(sp:ReadonlyURLSearchParams):SelectedFacets=>{
 
    const result:SelectedFacets={}
    
    for (const key of new Set(sp.keys())){

        const value=sp.getAll(key)
        
        if(key==="Price"){
           result[key]=value[0]
        }
        result[key]=value
    }

    return result
}
export default parseFilterState