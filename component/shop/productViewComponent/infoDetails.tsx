"use client"
type Props={
 feature: string[];
 techspecs:Record<string, string>
}

const InfoDetails=({feature, techspecs}:Props)=>{

const data=Object.entries(techspecs);

    return (

        <div className="flex flex-col mt-10 gap-20 grow lg:flex-row">
            <div className="flex flex-col flex-1 gap-5">
              <span className="text-3xl font-bold">Features</span>
              <ul className="flex flex-col gap-3 list-disc">
               {
               
                 feature.map((v, k)=>(
                    <li key={k}>
                        {v}
                    </li>
                 ))

               }
               </ul>
            </div>
          
            <div className="flex flex-col flex-1 gap-5">
              <span className="text-3xl font-bold">Tech Specs</span>
              <div className="flex flex-col gap-5">
               {

                data.map(([key, value])=>(

                    <div key={key} className="flex flex-col gap-3">
                        <span className="text-2xl font-bold">{key}</span>
                        <span>{value}</span>
                    </div>
                ))
               }
               </div>
            </div>

        </div>

    )
}
export default InfoDetails