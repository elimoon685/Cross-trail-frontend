import { ShoppingCart } from "@/interface/productList";
const Cart_key="cart";
export function getCart():ShoppingCart[] {

if(typeof window==="undefined") return [];
return JSON.parse(localStorage.getItem(Cart_key) || "[]");

}
export function setCart(cart: ShoppingCart[]) {
    localStorage.setItem(Cart_key, JSON.stringify(cart));
  }