export interface ProductsList {
    productId: string,
    name: string,
    color: string[],
    price: number,
    compareAtPrice: number | null,
    currency: "Aud",
    reviews: number | null,
    reviewsCount: number | null,



}
export type ShoppingCart={
  Id:string;
  productId:string;
  color: string;
  size: string | null;
  quantity: number;
  comparedPrice:number | null;
  price: number;
  title: string;
  image: string;

}
export type Review={
Id:string;
name:string;
date:string;
title:string;
rate:number;
helpful:number;
dislike:number;
content:string;

}
export type ProductColor = Record<string, string[]>;
export type Money = number;
export type Brand = {
    id: string;
    name: string;
};

export type ReviewForm = {
  name: string;
  email: string;
  rate: number;
  title: string;
  content: string;
};

export type Category = {
    id: string;
    name: string;
};
export type ColorOption = {
    value: string;     // 建议后面用 union 收紧
    label: string;
    swatch: `#${string}`;
  };
  export type Variant = {
    id: string;
    color: string;
    size: string|null;
    price: Money;
    compareAtAmount: string | null;
    stock: number;
  };
  export type Attribute={

    gender: string | null
  };
export type ProductDetails = {
    id: string,
    handle: string;
    title: string;
    brand: Brand;
    categories: Category[];
    tags: string[];
    descriptionHtml: string;
    options: {
        color: ColorOption[];
        size: string[]| null;
      };
    mediaByColor: ProductColor;
    attributes:Attribute
    variants: Variant[];
    features: string[];
  techspecs: {
    weight: string;
    material: string;
    fit: string;
  };
  reviews:null | number,
  reviewsCount:number|null

  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
reviewsList:Review[]

}