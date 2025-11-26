 'use client'
 import { useState } from "react";
 import { applicants, historyApplicants } from "@/data/applicants";
 import { formatTime } from "@/utlity/date";
 const AdminCheckCard=()=>{
    const [panel, setPanel]=useState<"pending"| "history">("pending")
    
    return (
    <div className="">
 <div className="flex mb-4 gap-3">
    <button className={`px-2 py-1 text-white text-2xl font-bold rounded-xl ${panel==="pending" ? "bg-[#75a3c5]":"bg-[#345975]"}`} 
    onClick={()=>setPanel(prev=>prev="pending")} 
    >Pending applications</button>
    <button className={`px-2 py-1 text-white text-2xl font-bold rounded-xl ${panel==="history" ? "bg-[#75a3c5]":"bg-[#345975]"}`}  
    onClick={()=>setPanel(prev=>prev="history")}
    >Reviewed applications</button>
 </div>
 <div className="">
    <div className="mb-4">
    {panel==="pending"? 
<span className="text-2xl">Pending organizer applications</span>
:
<span className="text-2xl">History organizer applications</span>
 }
 </div>
 <div className="flex flex-col py-2 border-2 gap-3 bg-white rounded-lg  max-h-[calc(100vh-200px)]">
    <div className="overflow-auto">
 <div className="flex w-full grow bg-gray-200 sticky top-0 z-50"> 
    <span className="text-2xl  py-1 flex-1 text-center">Application name</span>
    <span className="text-2xl  py-1 flex-1 text-center">Submission date</span>
    <span className="text-2xl  py-1 flex-1 text-center">Status</span>
 </div>
 {
    panel==="pending" ?
 applicants.map(a=>(
 <div className="flex w-full grow" key={a.date} onClick={()=>{}}>
<span className="text-xl pl-5 py-1 flex-1 text-center">{a.name}</span>
<span className="text-xl pl-5 py-1 flex-1 text-center">{formatTime(a.date)}</span>
<span className="text-xl pl-5 py-1 flex-1 text-center"><button className="bg-[#75a3c5] px-2 py-1 rounded-2xl">{a.status}</button></span>
 </div>))
 :
 historyApplicants.map(h=>(
    <div className="flex w-full grow" key={h.date}>
   <span className="text-xl px-4 py-1 flex-1 text-center">{h.name}</span>
   <span className="text-xl px-4 py-1 flex-1 text-center">{formatTime(h.date)}</span>
   <span className="text-xl px-4 py-1 flex-1 text-center"><button className={`${h.status==="approved" ? "bg-[#FF3B30]":"bg-[#5D9787]"} px-2 py-1 rounded-2xl`}>{h.status}</button></span>
    </div>))
 }
 </div>
 </div>
 </div>
    </div>)
 }
 export default AdminCheckCard