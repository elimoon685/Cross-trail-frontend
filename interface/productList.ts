export interface ProductsList{
    productId:string,
    name:string,
    color:string[],
    price:number,
    compareAtPrice:number|null,
    currency:"Aud",
    reviews:number | null,
    reviewsCount:number|null,
    


}
export type ProductColor=Record<string, string[]>;
