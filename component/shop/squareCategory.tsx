import Image from "next/image"
const SquareCategory=()=>{


    return (

        <div className="flex flex-wrap justify-between grow">
        <div className="relative h-70 w-70 group overflow-hidden">
        <Image alt="appreal" src="/appreal.jpg" fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-white/25">
        <div className="inline-flex flex-col items-start">
        <span className="text-white font-bold text-3xl">All Apparel</span>
        <span className="h-0.5 w-full bg-white origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
        </div>
        </div>

        <div className="relative h-70 w-70 group overflow-hidden">
        <Image alt="appreal" src="/headlamps.jpg" fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-white/25">
        <div className="inline-flex flex-col items-start">
        <span className="text-white font-bold text-3xl">Headlamps</span>
        <span className="h-0.5 w-full bg-white origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
        </div>
        </div>

        <div className="relative h-70 w-70 group overflow-hidden">
        <Image alt="appreal" src="/poles.jpg" fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-white/25">
        <div className="inline-flex flex-col items-start">
        <span className="text-white font-bold text-3xl">All Poles</span>
        <span className="h-0.5 w-full bg-white origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
        </div>
        </div>

        <div className="relative h-70 w-70 group overflow-hidden">
        <Image alt="appreal" src="/packs.jpg" fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-white/25">
        <div className="inline-flex flex-col items-start">
        <span className="text-white font-bold text-3xl">Packs</span>
        <span className="h-0.5 w-full bg-white origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
        </div>
        </div>
      

        </div>
    )
}
export default SquareCategory