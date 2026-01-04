
import { fliterScope } from "@/data/productsFliter";
import Products from "@/data/productsLists";
import ShopClientView from "@/component/shop/shopClientViews";
import { Metadata } from "next";
type PageProps = {
    params: Promise<{ category: string }>;
    searchParams: { [key: string]: string | string[] | undefined };
  };
  export async function generateMetadata(
    { params }: { params: Promise<{ category: string }> }
  ): Promise<Metadata> {
    const {category} = await params
  
  
    const categoryTitle =
      category.charAt(0).toUpperCase() + category.slice(1);
  
    return {
      title:categoryTitle,

      description: `Explore ${categoryTitle} collection including performance apparel and gear for outdoor activities.`,
    };
  }
const ProductsViews= async ({params, searchParams}:PageProps)=>{
    //const initialData = await ShopApi.getProducts(searchParams);
    return (

        <div className="flex">
     
     <ShopClientView data={fliterScope} productsList={Products}/>
     
       
        </div>
    )
}
export default ProductsViews