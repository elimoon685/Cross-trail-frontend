
"use client"
import { Review } from "@/interface/productList";
import { RxAvatar } from "react-icons/rx";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown} from "react-icons/io";
type Props = {
  data: Review[]
}
const arr = Array.from({ length: 5 });
const ReviewsList = ({ data }: Props) => {


  return (

    <div className="flex flex-col gap-10 mt-10">

      {
        data.map((c, index) => (

          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <RxAvatar className="w-10 h-10 shrink-0" />
                <span className="text-xl">{c.name}</span>
              </div>
            </div>
            <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="flex">
                {
                  arr.map((s, index)=>{
                  
                  if(c.rate-index>0){

                    return <IoStar key={index} className="text-amber-500 w-5 h-5" />
                  }else{
                    return <IoStarOutline key={index} className="text-amber-500 w-5 h-5" />
                  }



                 })



               }
                

              </div>

              <span className="font-bold text-[18px]">{c.title}</span>

            </div>
            <span>{c.date}</span>
            </div>
           <span>{c.content}</span>

           <div className="flex self-end items-center gap-3">
            <span>Was this helpful?</span>
            
            <span className="flex items-center gap-1"><IoMdThumbsUp />{c.helpful}</span>
            <span className="flex items-center gap-1"><IoMdThumbsDown/>{c.dislike}</span>
           </div>
          </div>
        ))
       

      }

    </div>

  )
}
export default ReviewsList