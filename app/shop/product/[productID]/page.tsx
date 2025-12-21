import ProductDetailsView from "@/component/shop/productViewComponent/productViews";
import { ShopApi } from "@/api/shop"
type Props = { params: Promise<{ productID: string }> };
const TargetedProductView=async ({ params }: Props)=>{
const {productID}= await params;
  //const productDetails=await ShopApi.getTargetedProducts(productID)
  
    return (
        <>
        <ProductDetailsView/>
        </>
    )
}
export default TargetedProductView