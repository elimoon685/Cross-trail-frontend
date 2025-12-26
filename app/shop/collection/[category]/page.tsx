
import { fliterScope } from "@/data/productsFliter";
import Products from "@/data/productsLists";
import ShopClientView from "@/component/shop/shopClientViews";
type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
const ProductsViews= async ({searchParams}:PageProps)=>{
    //const initialData = await ShopApi.getProducts(searchParams);
    return (

        <div className="flex">
     
     <ShopClientView data={fliterScope} productsList={Products}/>
     
       
        </div>
    )
}
export default ProductsViews