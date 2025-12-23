import ShopHeader from "@/component/shopHeader";
export default function ShopLayout({children}:{children:React.ReactNode}){

    return(
        <>
        <ShopHeader/>
        {children}
        </>
    )

}
