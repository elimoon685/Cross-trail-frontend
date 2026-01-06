import CheckoutHeader from "@/component/checkoutHeader"
import { Metadata } from "next";
export const metadata: Metadata = {
    
    title: "Checkout",
    description: "Browse our latest products, categories, and deals.",
    
  };

export default function CheckoutLayout({children}:{children:React.ReactNode}){

    
    return (

        <>
        <CheckoutHeader/>
        {children}
        </>
    )
}
