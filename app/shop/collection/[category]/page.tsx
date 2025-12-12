import ShopFliter from "@/component/siderComponent/shopFliter";
import ProductLists from "@/component/shop/productLists";
import { fliterScope } from "@/data/productsFliter";
import ShopClientView from "@/component/shop/shopClientViews";
type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
const ProductsViews= async ({searchParams}:PageProps)=>{

    //const initialData = await ShopApi.getProducts(searchParams);
    return (

        <div className="flex">
     
     <ShopClientView data={fliterScope}/>
       
        </div>
    )
}
export default ProductsViews