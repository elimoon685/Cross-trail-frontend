"use client"
import { Review } from "@/interface/productList";
import { useState } from "react";
import ReviewsList from "./reviewsList";
import { CountReviews } from "@/utlity/coutReviews";
import RateStart from "@/utlity/rateStart";
import ReviewsGroupBar from "./reviewsGroupBar";
import { FaPenToSquare } from "react-icons/fa6";
import WriteReview from "./writerReview";
type Props = {
  data: Review[];
}
const ReviewsArea = ({ data }: Props) => {

  const [openReview, setOpenReview] = useState<boolean>(false)

  const { averageScore, result } = CountReviews(data);

  return (
    <section className="flex flex-col w-full">
      <h2 id="customer-reviews" className="text-3xl font-bold sr-only">
        Customer Reviews
      </h2>
      <div className="flex flex-col gap-10 justify-between mt-10 grow lg:flex-row">
        <div className="flex flex-col gap-10 flex-1 sm:flex-row">
          <RateStart data={averageScore} count={data.length} />
          <ReviewsGroupBar data={result} total={data.length} />
        </div>
        <button className="border border-gray-300  w-70 h-9 rounded-2xl self-center flex items-center justify-center gap-3"
          onClick={() => setOpenReview(prev => !prev)}
        ><FaPenToSquare />Write the review</button>

      </div>
      {
        openReview && (

          <WriteReview />
        )
      }

      <ReviewsList data={data} />
    </section>
  )
}
export default ReviewsArea