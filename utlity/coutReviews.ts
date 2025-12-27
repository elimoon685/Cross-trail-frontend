import { Review } from "@/interface/productList";

 export function CountReviews(data:Review[]){
    const result: Record<number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
const sum=data.reduce((acc, c)=>acc+c.rate, 0);
const averageScore=data.length? sum / data.length: 0;

for(const r of data){

    result[r.rate]++
}
return {averageScore:averageScore, result}

}

