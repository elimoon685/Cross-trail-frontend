
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
const arr = Array.from({ length: 5 });
type Props={
    total:number
    data:Record<number, number>
}

const ReviewsGroupBar=({data, total}:Props)=>{
    
    return (

        <section className="flex flex-col gap-1 ">
            {
              arr.map((_, idx)=>(
              <div className="flex items-center gap-3" key={idx }>
                <span className="flex gap-1">
                    {
                     arr.map((_, index)=>{
                     if(arr.length-idx>index){
                        return <IoStar key={index} className="text-amber-500 w-5 h-5"/>
                     }else{
                        return < IoStarOutline key={index} className="text-amber-500 w-5 h-5"/>
                     }
                       

                   })

                    }
                </span>
                <div className="w-[200px] h-4 border-gray-300 border">
                    <div className="h-full bg-gray-500" style={{width:`${(data[5-idx]/total)*100}%`}}></div>
                </div>
                <span>{data[5-idx]}</span>
                </div>
              ))
            }
            

        </section>
    )
}
export default ReviewsGroupBar