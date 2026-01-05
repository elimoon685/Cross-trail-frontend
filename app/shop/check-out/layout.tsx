import CheckoutHeader from "@/component/checkoutHeader"

export default function CheckoutLayout({children}:{children:React.ReactNode}){



    return (

        <>
        <CheckoutHeader/>
        {children}
        </>
    )
}
