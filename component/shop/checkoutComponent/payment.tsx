'use client'
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { stripeAppearance } from "@/lib/appearance";
import {
  Elements, PaymentElement, AddressElement,
  useStripe, useElements
} from "@stripe/react-stripe-js";
import { PaymentApi } from "@/api/payment";
import { useCart } from "@/provider/shoppingCartProvider";
import CheckoutProductList from "./checkoutProductList";
type FormDataPros={
    name:string,
    setName:React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail:React.Dispatch<React.SetStateAction<string>>,
    amount:number,
  }
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const Payment=()=>{

    const { totalPrice} = useCart();
    const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

    

    return (

        <div className="flex flex-1 justify-center overflow-auto">
            <Elements
          stripe={stripePromise}
          // deferred mount: no clientSecret yet
          options={{ mode: "payment", amount: Math.max(1, totalPrice * 100), currency: "aud", appearance: stripeAppearance }}
        >
          <Form name={name} setName={setName} email={email} setEmail={setEmail}  amount={totalPrice} />
        </Elements>
        </div>
    )
}
const Form = ({ name, setName, email, setEmail, amount }: FormDataPros) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const onSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      if(!email || ! name || !amount) return;
      if (!stripe || !elements) return;
      try{
        const { error: submitError } = await elements.submit();
    if (submitError) {
      // e.g. “Enter a card number”, “CVC required”, etc.
      // Show submitError.message and return
      return;
    }
  
        const res:any= await PaymentApi.getPaymentIntent({email:email, firstName:name, amountAud:amount})
        const clientSecret = res.data.clientSecret;
        const { error } = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/donate/success`,
          },
        });
  
      }catch(err:any){
  
      }
  
    }
    return (
      <form onSubmit={onSubmit} className="space-y-4 mt-10  px-3 py-3 max-w-[500px] shadow-lg drop-shadow-md shadow-black/30 w-full">
        <div className="flex items-center mb-3">
          <button className="w-6 h-6 rounded-full bg-black text-gray-300 mr-3">1</button>
          <p className="text-2xl">Enter payment information</p>
        </div>
        {/* your own non-sensitive fields */}
        <label className="block text-[#374151] mb-[3px] font-bold text-[14.88px] leading-[17.112px]" htmlFor="email">Email<span></span></label>
        <input id="email"
          name="email"
          className="border border-[#9ca3af] rounded p-[9px] mb-[15px] w-full text-[20px] leading-[23px] focus:border-[#111827] focus:shadow-[0_0_0_3px_rgba(17,24,39,.15)] focus:outline-none" 
          placeholder="" 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} required />
  
        {/* Stripe-hosted fields */}
        <AddressElement options={{ mode: "billing", display: { name: "split" } }} 
        onChange={(ev) =>{
          const { value } = ev;
          const firstName = value?.firstName ?? "";
          setName(firstName);
        }
        } />
        <div className="flex items-center mb-3">
          <button className="w-6 h-6 rounded-full bg-black text-gray-300 mr-3">2</button>
          <p className="text-2xl">Choose payment method</p>
        </div>
        <PaymentElement />  {/* card + CVC + wallets as applicable */}
        <div className="lg:hidden">
        <CheckoutProductList/>
        </div>
        <button disabled={!stripe || loading} 
                className="px-4 py-2 rounded bg-[#5D9787] text-white w-full text-2xl font-bold">
          Pay now 
        </button>
      </form>
    )
  }
export default Payment