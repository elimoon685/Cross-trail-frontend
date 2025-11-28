'use client'
import { useQuery } from "@tanstack/react-query";
import { AdminApi } from "@/api/admin";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { examplesOfScreenshots } from "@/data/applicants";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
const AdminCheckBoard = (initialData: any) => {
  const [viewImage, setViewImage]=useState<number|null>(null);
  const { data } = useQuery({
    queryKey: ["admin-application"],
    queryFn: async () => {
      const res = await AdminApi.UpdateApplicationStatus({ id: "01010", status: "approved" });
      return res.data.data;
    },
    initialData,
  });
  const showPrev=()=>{
   
      setViewImage(prev=>{
        if(prev===null) return prev;
        return (prev-1+examplesOfScreenshots.length) % examplesOfScreenshots.length
      })
  }
  const showNext=()=>{
    setViewImage(prev=>{
      if(prev===null) return prev;
      return (prev+1) % examplesOfScreenshots.length
    })
  }
  return (
    <div className="flex flex-col grow max-w-[1300px] w-full px-10 py-10 gap-10">
      <p className="text-3xl">Review application</p>
     <div className="flex flex-col md:flex-row md:gap-10 bg-[#c2eef5] px-10 py-10">
      <div className="flex flex-col flex-1">
      <div className="flex flex-col">
            <label htmlFor="firstName" className="block text-[14px] self-start">First name</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1 bg-white"
            placeholder="Elinor"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="lastName" className="block text-[14px] self-start">Last name</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1 bg-white"
            placeholder="Lin"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="country" className="block text-[14px] self-start">Country</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1 bg-white"
            placeholder="Australia"
            readOnly
           
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="phone" className="block text-[14px] self-start">Mobile phone</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1 bg-white"
            placeholder="+61 0491667024"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="email" className="block text-[14px] self-start">Email</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1 bg-white"
            placeholder="linsophymoon@gmail.com"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="city" className="block text-[14px] self-start">City</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1 bg-white"
            placeholder="Sydney"
            readOnly
               />
        </div>

      </div>
      <div className="flex flex-col flex-1">
      <label htmlFor="city" className="block text-[14px] self-start">Proof of experience{examplesOfScreenshots.length+" screenshots"}</label>
      <div className="flex flex-wrap gap-3">
        {
          examplesOfScreenshots.map((i, idx)=>(
            <div className="w-40 h-30 px-3 py-3 bg-[#DCEFF2] relative" 
                 key={i}
                 onClick={() =>setViewImage(idx)} 
                 >
              <img src={i} alt={i} className="w-full h-full object-cover hover:scale-105" />
            </div>
          ))
        }

      </div>
      </div>
      <div>

      </div>

     </div>
    <div className="flex flex-col">
    <div className="flex flex-col gap-10 md:flex-row">
      <div className="flex gap-10">
      <button className="bg-[#5D9787] px-2 py-1 rounded-xl w-35 text-white text-xl font-bold flex items-center gap-2 justify-center"><IoMdCheckmark/><span>Approve</span></button>
      <button className="bg-[#FF3B30] px-2 py-1 rounded-xl w-35 text-white text-xl font-bold flex items-center gap-2 justify-center"><FaXmark/><span>Reject</span></button>
      </div>
      <input 
      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
      placeholder="reason for rejection"
      required
      />
     
    </div>

    </div>
    {
      viewImage !==null && 
     <div className="fixed inset-0 bg-white flex flex-col justify-center items-center">
       <img
    src={examplesOfScreenshots[viewImage]}
    alt="activity-screenshot"
    className="max-w-[70vw] max-h-[70vh] w-auto h-auto object-cover rounded-md shadow-2xl"
  />
      <div className="flex items-center gap-5 mt-10">
       <a className="h-10 w-10 shadow-lg shadow-black/30 rounded-full bg-white flex items-center justify-center cursor-pointer"
          onClick={showPrev}
       ><FaAngleLeft/></a>
       <a className="h-15 w-15 shadow-lg shadow-black/30 rounded-full bg-white flex items-center justify-center cursor-pointer"
          onClick={()=>setViewImage(null)}
       ><FaXmark className="w-10 h-10"/></a>
       <a className="h-10 w-10 shadow-lg shadow-black/30 rounded-full bg-white flex items-center justify-center cursor-pointer"
        onClick={showNext}
       ><FaAngleRight/></a>
       
      </div>
      
   
      

     </div>
       } 

    </div>
  )
}
export default AdminCheckBoard