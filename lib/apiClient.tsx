import axios from 'axios';

export const apiClient = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const apiShop=axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    'Content-Type': 'application/json',
  },

})

export const apiPayment=axios.create({
  baseURL:process.env.NEXT_PUBLIC_LASOPHY_PAYMENT_BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})