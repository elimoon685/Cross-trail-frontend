"use client"
import { useState, useCallback, useEffect, createContext, useMemo,useContext} from "react";
import { ShoppingCart } from "@/interface/productList";
import { getCart, setCart } from "@/utlity/cartGetorSet";

type CTX={

    shoppingCart:ShoppingCart[];
    addCart:(product:ShoppingCart)=>void;
    removeCart:(productId:string)=>void;
    count:number;
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

    const removeCart=(productId:string)=>{

    const next=shoppingCart.filter(i=>i.productId!==productId);
    setCart(next);
    setShoppingCart(next)
    }
    const count=useMemo(()=>shoppingCart.reduce((acc, i)=>acc+i.quantity, 0),[shoppingCart]);

    const value=useMemo<CTX>(()=>({shoppingCart, addCart, removeCart, count}),[shoppingCart, count]);

    return <ShoppingCartContext.Provider value={value}> {children}</ShoppingCartContext.Provider>
}
export function useCart() {
    const ctx = useContext(ShoppingCartContext);
    if (!ctx) throw new Error("useCart must be used within <CartProvider>");
    return ctx;
  }