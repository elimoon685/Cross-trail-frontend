import { ShopApi } from "@/api/shop"
import ShopFliter from "@/component/siderComponent/shopFliter";
import ProductLists from "@/component/shop/productLists";
import { fliterScope } from "@/data/productsFliter";
const ProductsViews= async ()=>{

    //const initialData = await ShopApi.getProducts();
    return (

        <div className="flex gap-5">
       <ShopFliter data={fliterScope}/>
       <ProductLists/>
        </div>
    )
}
export default ProductsViews