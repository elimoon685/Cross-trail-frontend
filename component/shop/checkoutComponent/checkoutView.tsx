import Payment from "./payment"
import CheckoutProductList from "./checkoutProductList"
const CheckoutView=()=>{




    return (

        <div className="flex flex-col grow lg:flex-row">
            <Payment/>
            <CheckoutProductList/>
        </div>
    )
}
export default CheckoutView