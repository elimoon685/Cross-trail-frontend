
'use client'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { useState } from "react";
import { ReviewForm } from "@/interface/productList";
const WriteReview=()=>{
    const [rate, setRate]=useState<number>(0)
    const [form, setForm] = useState<ReviewForm>({
        name: "",
        email: "",
        rate: 0,
        title: "",
        content: "",
      });
    const arr=Array.from({length:5});

    const handleSubmit=async (e: React.FormEvent)=>{
    
        e.preventDefault();




    }

    return (

        <form className="border border-gray-300 px-5 py-5 mt-10 flex flex-col" 

        onSubmit={handleSubmit}
        >
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-1 flex flex-col">  
            <label htmlFor="name" className=" mb-3"> Name</label>
            <input id="name" 
            value={form.name}
            onChange={(e)=>{setForm({...form, name:e.target.value})}}
            className=" px-3 py-1 border border-gray-300"
            required
            />
        </div>

        <div className="flex-1 flex flex-col">
            <label htmlFor="email" className=" mb-3">Email</label>
            <input id="email" 
            value={form.email}
            onChange={(e)=>{setForm({...form, email:e.target.value})}}
            className=" px-3 py-1 border border-gray-300"
            required
            />
        </div>
      
        </div>
        <div className="flex flex-col mt-5">
            <label className="mb-3">Rate</label>
            <div className="flex gap-1">
            {
                arr.map((s, idx)=>{
             if(rate>idx){
                return <IoStar key={idx} className="text-amber-500 w-6 h-6" onClick={()=>{setRate(idx+1); setForm({...form, rate:idx+1})}}/>
             }else{
                return <IoStarOutline key={idx} className="text-amber-500 w-6 h-6" onClick={()=>{setRate(idx+1); setForm({...form, rate:idx+1})}}/>
             }

})
            }
            </div>
        </div>
        <div className="flex flex-col mt-5">
            <label htmlFor="title" className=" mb-3">Title of review</label>
            <input id="title" 
                   value={form.title}
                   onChange={(e)=>{setForm({...form, title:e.target.value})}}
            className=" px-3 py-1 border border-gray-300"
            required
            />

        </div>
        <div className="flex flex-col mt-5">
        <label htmlFor="content" className=" mb-3">How was your overall experience</label>
            <textarea id="content" 
             value={form.content}
             onChange={(e)=>{setForm({...form, content:e.target.value})}}
            className="border border-gray-300 h-30 px-3 py-2"
            required
            />


        </div>
        <button className="mt-5 border self-end px-3 py-1 rounded-sm bg-[#FF3B30] border-gray-300 text-white font-bold" 
                type="submit"
        >Submit</button>
        </form>
    )
}
export default WriteReview