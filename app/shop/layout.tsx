import type { Metadata } from "next";
import ShopHeader from "@/component/shopHeader";
import { ShoppingCartProvider} from "@/provider/shoppingCartProvider";
export const metadata: Metadata = {
    title: {
      default: "Shop",
      template: "%s | Shop",
    },
    description: "Browse our latest products, categories, and deals.",
    
  };
export default function ShopLayout({children}:{children:React.ReactNode}){

    return(
        <>
        <ShoppingCartProvider>
        <ShopHeader/>
        {children}
        </ShoppingCartProvider>

        </>
    )

}
