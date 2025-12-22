import ProductDetailsView from "@/component/shop/productViewComponent/productViews";
import { ShopApi } from "@/api/shop"
import { ProductData } from "@/data/productDetails";
type Props = { params: Promise<{ productID: string }> };
const TargetedProductView=async ({ params }: Props)=>{
const {productID}= await params;
  //const productDetails=await ShopApi.getTargetedProducts(productID)
  
  let target:null | number=null;
  for(let i=0; i<ProductData.length; i++){
     if(ProductData[i].id===productID){
        target=i;
        break;
     }

  }
    return (
        <>
        <ProductDetailsView productData={ProductData[target as number]}/>
        </>
    )
}
export default TargetedProductView