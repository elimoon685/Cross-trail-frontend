"use client"
type Props={
 feature: string[];
 techspecs:Record<string, string>
}

const InfoDetails=({feature, techspecs}:Props)=>{

const data=Object.entries(techspecs);

    return (

        <section className="flex flex-col mt-10 gap-20 grow lg:flex-row">
            <section className="flex flex-col flex-1 gap-5">
              <h2 className="text-3xl font-bold">Features</h2>
              <ul className="flex flex-col gap-3 list-disc">
               {
               
                 feature.map((v, k)=>(
                    <li key={k}>
                        {v}
                    </li>
                 ))

               }
               </ul>
            </section>
          
            <section className="flex flex-col flex-1 gap-5">
              <h2 className="text-3xl font-bold">Tech Specs</h2>
              <dl className="flex flex-col gap-5">
               {

                data.map(([key, value])=>(

                    <div key={key} className="flex flex-col gap-3">
                        <dt className="text-2xl font-bold">{key}</dt>
                        <dt>{value}</dt>
                    </div>
                ))
               }
               </dl>
            </section>

        </section>

    )
}
export default InfoDetails