import { Metadata } from "next";
import ProductDetailsView from "@/component/shop/productViewComponent/productViews";
import { ShopApi } from "@/api/shop"
import { ProductData } from "@/data/productDetails";
type Props = { params: Promise<{ productID: string }>};

function findProduct(productID: string) {
   return ProductData.find((p) => p.id === productID) ?? null;
 }
 export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { productID } = await params;
   const product = findProduct(productID);
   if (!product) {
     return {
       title: "Product not found",
       description: "The product you are looking for does not exist.",
       robots: { index: false, follow: false },
     };
   }
 
   
   const title = product.seo?.title ?? `${product.title} | ${product.brand?.name ?? "Shop"}`;
   const description =
     product.seo?.description ??
     `Shop ${product.title} by ${product.brand?.name ?? "our brand"}. Available sizes: ${product.options?.size?.join(
       ", "
     )}.`;
 
   
   const ogImage =
     product.seo?.ogImage ??
     (() => {
       const firstColor = product.options?.color?.[0]?.value;
       const firstImg = firstColor ? product.mediaByColor?.[firstColor]?.[0] : undefined;
       
       return firstImg ? `/${firstImg}` : undefined;
     })();
 
   return {
     title,
     description,
     openGraph: {
       title,
       description,
       type: "website",
       images: ogImage ? [{ url: ogImage }] : undefined,
     },
     twitter: {
       card: ogImage ? "summary_large_image" : "summary",
       title,
       description,
       images: ogImage ? [ogImage] : undefined,
     },
   };
 }
const TargetedProductView=async ({ params }: Props)=>{
   const { productID } = await params; 

   const product = findProduct(productID);
  //const productDetails=await ShopApi.getTargetedProducts(productID)
  
//   let target:null | number=null;
//   for(let i=0; i<ProductData.length; i++){
//      if(ProductData[i].id===productID){
//         target=i;
//         break;
//      }

//   }
if (!product) return <div>Not found</div>;
    return (
        <>
        <ProductDetailsView productData={product}/>
        </>
    )
}
export default TargetedProductView