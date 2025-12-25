"use client"
import { ProductDetails } from "@/interface/productList";
import { useState } from "react";
import { Variant } from "@/interface/productList";
import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { useCart } from "@/provider/shoppingCartProvider";
type Props={

    data:ProductDetails
}

const arr = Array.from({ length: 5 });
const ProductOptions=({data}:Props)=>{
const [selectedVariant, setSelectedVariant]=useState<Variant>(data.variants[0]);
const [selectedColor, setSelectedColor]=useState<string >(data.variants[0].color);
const [selectedSize, setSelectedSize]=useState<string | null>(data.variants[0].size);
const [quantity, setQuantity]=useState<string>("1");
const {addCart}=useCart();
const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];

const uniqueSizes = Array.from(
  new Set(data.variants.map(v => v.size).filter((s):s is string =>!!s))
).sort(
  (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
);
const uniqueColor=Array.from(
    new Set(data.variants.map(v=>v.color))
)

const colorCode=uniqueColor.map(c=>{

    const targetedItem=data.options.color.find(item=>item.value==c)
    console.log(targetedItem)
    return {[c]:targetedItem?.swatch}
});

const selectColor=(color:string)=>{

    const currentSize=selectedSize;
    const sameVariants=data.variants.find(item=> item.size===currentSize && item.color===color);
    if(sameVariants){
        setSelectedColor(color)
        setSelectedVariant(sameVariants)
        return;

    }
    const firstOfColor = data.variants.find(
        (v) => v.color === color
      );
    
      if (firstOfColor) {
        setSelectedVariant(firstOfColor);
      }

}
const selectSize=(size:string)=>{

    const currentColor=selectedColor;
    const sameVariants=data.variants.find(item=> item.size===size && item.color===currentColor);
    if(sameVariants){
        setSelectedSize(size)
        setSelectedVariant(sameVariants)
        return;

    }
    const firstOfColor = data.variants.find(
        (v) => v.color === currentColor
      );
    
      if (firstOfColor) {
        setSelectedVariant(firstOfColor);
      }
}
const onBlurQuantity=()=>{
    if (quantity.trim() === "") {
        setQuantity("1");
        return;
      }
    
      const n = Number(quantity);
    
   
      if (Number.isNaN(n)) {
        setQuantity("1");
        return;
      }
    
      if (n <= 0) {
        setQuantity("1");
        return;
      }

}
const decreaseQuantity=()=>{
    if(Number(quantity)===1) {setQuantity("1")}
    else{
        const n = Number(quantity);
        setQuantity(String(n-1))
    }
}
const increaseQuantity=()=>{
    const n = Number(quantity);
    setQuantity(String(n+1))


}
    return (

        <div className="flex flex-col gap-5 grow justify-center">
        <span className="text-3xl font-bold">{data.title}</span>
        {
            selectedVariant.compareAtAmount ? 
            <div className="flex gap-3">
            <del className="text-gray-400 mr-2 text-3xl">${selectedVariant.price}</del>
            <span className="text-red-600 text-3xl">${selectedVariant.compareAtAmount}</span>
            </div>
            :  <span className="text-black text-3xl">${selectedVariant.price}</span>
        }
        <div className="flex gap-5">
        {
            (data.reviews !== null && data.reviewsCount!==null) &&
              <div className="flex gap-1">
                {
                  arr.map((_, index) => {
                    if (data.reviews! - index > 0.5) {
                      return <IoStar className="text-amber-500 w-6 h-6" />
                    } else if (data.reviews! - index < 0.5 && data.reviews! - index > 0) {
                      return <IoStarHalf className="text-amber-500 w-6 h-6" />
                    } else {

                      return <IoStarOutline className="text-amber-500 w-6 h-6" />
                    }

                  }
                  
                  )
                }
                
              </div>
            }
            { data.reviewsCount!==null && <span className="">{data.reviewsCount} Reviews</span>}
        </div>
        {data.options.size !==null && 
        <div className="flex flex-col gap-2">
            <span className="flex items-center gap-3"><span className="text-xl font-bold">Size</span>  --{selectedSize}</span>
        <div className="flex gap-3">
            {
                uniqueSizes.map((size, index)=>(
                    <span key={`${index}-${size}`} 
                          className={`w-10 h-10 flex items-center justify-center ${selectedSize===size ?"border-2 border-black" : "border-2 border-gray-300" }`}
                          onClick={()=>selectSize(size)}
                         >
                        {size}</span>

                ))
            }

        </div>
        </div>
        }
        <div className="flex flex-col gap-2">
            <span className="flex gap-3 items-center"><span className="text-xl font-bold">Color</span>--{selectedColor}</span>
        <div className="flex gap-3">
         {
          colorCode.map((c,index)=>{
            const [name, swatch] = Object.entries(c)[0];
           return (
             
             
             <span key={`${index}-${name}`} 
             className={`w-10 h-10 ${selectedColor===name ? "border-2 border-black" : "border-2 border-gray-300"}`}
             style={{backgroundColor: swatch}}
             onClick={()=>selectColor(name)}>
            
             </span>
            

          )})

         }
        </div>
        </div>
        
        <div className="flex flex-col gap-3">
         <span className="flex items-center gap-3"> <span className="flex font-bold text-xl">Quantity</span>stock {selectedVariant.stock}</span>
         <div className="flex grow gap-5">
         <div className="border-2 border-gray-300 flex justify-center self-start">
          <button className="px-3 bg-white hover:bg-[#DCEFF2] h-10 transition-colors duration-700 text-2xl"
                  onClick={decreaseQuantity}
          >-</button>
          <input className="w-10 h-10 text-center" 
                 value={quantity}
                 onBlur={onBlurQuantity}
                 onChange={(e)=>{
                    setQuantity(e.target.value)
                }}
                 />
          <button className="px-3 hover:bg-[#DCEFF2] text-2xl"
                  onClick={increaseQuantity}

          >+</button>
         </div>{
            selectedVariant.stock>0 ?
         <button className="bg-[#FF3B30] grow text-xl text-white font-bold"
         onClick={()=>addCart({
            productId:data.id,
            color:selectedVariant.color,
            size:selectedVariant.size,
            quantity:Number(quantity),
            comparedPrice:Number(selectedVariant.compareAtAmount),
            price:selectedVariant.price,
            title:data.title,
            image:""

         })}
         >Add to cart</button>
         :
         <button className="bg-gray-300 grow text-xl text-white font-bold">Sold out</button>
}
         </div>
        </div>
        
        </div>

    )
}
export default ProductOptions