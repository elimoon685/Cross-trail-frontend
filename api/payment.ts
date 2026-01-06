import { apiPayment } from "@/lib/apiClient"
import { CreatePaymentFormData } from "@/interface/userRequestType"
export const PaymentApi={

 getPaymentIntent:(PaymentPros:CreatePaymentFormData)=>
    apiPayment.post("/Payment/create-intent", PaymentPros)

}