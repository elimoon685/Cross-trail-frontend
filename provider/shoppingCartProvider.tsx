"use client"
import { useState, useCallback, useEffect, createContext, useMemo,useContext} from "react";
import { ShoppingCart } from "@/interface/productList";
import { getCart, setCart } from "@/utlity/cartGetorSet";

type CTX={

    shoppingCart:ShoppingCart[];
    addCart:(product:ShoppingCart)=>void;
    removeCart:(Id:string)=>void;
    increaseQuantity:(Id:string)=>void;
    decreaseQuantity:(Id:string)=>void;
    count:number;
    totalPrice:number;
}
export const ShoppingCartContext=createContext<CTX |null>(null);
export function ShoppingCartProvider({children}:{ children: React.ReactNode }){

    const [shoppingCart, setShoppingCart]=useState<ShoppingCart[]>([]);
    useEffect(()=>{
        setShoppingCart(getCart())
    }, [])


    const addCart=(product:ShoppingCart)=>{
    const next=[...shoppingCart];
    const existing=next.find(i=>
        i.productId===product.productId &&
        i.color===product.color &&
        i.size===product.size

    );
    if(existing){
        existing.quantity+=product.quantity
    }else{
        next.push(product)
    }
    setCart(next);
    setShoppingCart(next);
    }

    const removeCart=(Id:string)=>{

    const next=shoppingCart.filter(i=>(i.Id!==Id));
    setCart(next);
    setShoppingCart(next)
    }

    const increaseQuantity=(Id:string)=>{
     const next=[...shoppingCart]
     const existing=next.find(i=>i.Id===Id);

     if(existing){
        existing.quantity++;
    }else{
        return;
    }
    setCart(next);
    setShoppingCart(next);
    }

    const decreaseQuantity=(Id:string)=>{
        const next=[...shoppingCart]
        const existing=next.find(i=>i.Id===Id);
        if(existing){
           if(existing.quantity===1){
            const leftProduct=next.filter(i=>(i.Id!==Id));
            setCart(leftProduct);
            setShoppingCart(leftProduct);
            return;
           } else{
            existing.quantity-=1
           }
       }else{
           return;
       }
       setCart(next);
       setShoppingCart(next);

    }
    const count=useMemo(()=>shoppingCart.reduce((acc, i)=>acc+i.quantity, 0),[shoppingCart]);

    const totalPrice=useMemo(()=>shoppingCart.reduce((acc,i)=>acc+i.quantity*(i.comparedPrice? i.comparedPrice:i.price),0),[shoppingCart]);

    const value=useMemo<CTX>(()=>({shoppingCart, addCart, removeCart, increaseQuantity, decreaseQuantity, count, totalPrice}),[shoppingCart, count]);
    
    
    return <ShoppingCartContext.Provider value={value}> {children}</ShoppingCartContext.Provider>
}
export function useCart() {
    const ctx = useContext(ShoppingCartContext);
    if (!ctx) throw new Error("useCart must be used within <CartProvider>");
    return ctx;
  }