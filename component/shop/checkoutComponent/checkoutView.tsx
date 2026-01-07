import Payment from "./payment"
import CheckoutProductList from "./checkoutProductList"
const CheckoutView=()=>{

    return (
        <div className="flex flex-col grow lg:flex-row">
            <Payment/>
            <aside className="hidden flex-1 justify-start items-center bg-[#DCEFF2] lg:flex-row lg:flex ">
            <CheckoutProductList/>
            </aside>
        </div>
    )
}
export default CheckoutView