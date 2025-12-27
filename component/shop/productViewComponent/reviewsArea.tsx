"use client"
import { Review } from "@/interface/productList";
import { useState } from "react";
import ReviewsList from "./reviewsList";
import { CountReviews } from "@/utlity/coutReviews";
import RateStart from "@/utlity/rateStart";
import { Average } from "next/font/google";
import ReviewsGroupBar from "./reviewsGroupBar";
type Props={
    data:Review[];
}
const ReviewsArea=({data}:Props)=>{
    
const [openReview, setOpenReview]=useState<boolean>(false)
 
  const {averageScore, result}=CountReviews(data);

    return (

    <div className="flex gap-5">

      <RateStart data={averageScore} count={data.length}/>
      <ReviewsGroupBar data={result} total={data.length}/>
       

       {openReview && 

        <ReviewsList/>

       }
        </div>

    )
}
export default ReviewsArea