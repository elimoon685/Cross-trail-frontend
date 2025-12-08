export type FacetOption = { value: number; name: string; count: number };
export type ProductDto={productId:string, name:string, price:number, color:string[]}
export type ProductsResponse = {
  products: ProductDto[];
  facets: {
    gender:FacetOption[];
    productType: FacetOption[];
    activity: FacetOption[];
    color: FacetOption[];
    discount:FacetOption[];
    review:FacetOption[];
    availbility:FacetOption[];
  };
};
export type MocData=Record<string, FacetOption[]>