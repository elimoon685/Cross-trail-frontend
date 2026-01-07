import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const arr = Array.from({ length: 5 });
type Props = {

  data: number;
  count:number;
}
const RateStart = ({ data, count}: Props) => {



  if (data === 0) {

    return <div className="flex gap-1 self-center">
      {
        arr.map((_, index) => {

          return <IoStarOutline key={index} className="text-amber-500 w-6 h-6" />
        })
      }
    </div>
  } else {

    return <section className="flex flex-col self-center">
      <div className="flex gap-3">
      <span className=" text-3xl font-bold self-start">{data}</span>
      
      <div className="flex gap-1">
        {
          arr.map((_, index) => {
            if (data! - index > 0.5) {
              return <IoStar key={index} className="text-amber-500 w-7 h-7" />
            } else if (data! - index < 0.5 && data! - index > 0) {
              return <IoStarHalf key={index} className="text-amber-500 w-7 h-7" />
            } else {

              return <IoStarOutline key={index} className="text-amber-500 w-7 h-7" />
            }

          }

          )
        }

      </div>
      </div>
      <span className=" font-bold self-center">{count} Reviews</span>
    </section>
  }

}
export default RateStart