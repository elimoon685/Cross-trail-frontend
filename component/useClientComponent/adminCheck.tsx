 'use client'
 import { useState } from "react";
 import { applicants, historyApplicants } from "@/data/applicants";
 import { formatTime } from "@/utlity/date";
 const AdminCheckCard=()=>{
    const [panel, setPanel]=useState<"pending"| "history">("pending")
    
    return (
    <div className="">
 <div className="flex">
    <button className={`px-2 py-1 text-white text-2xl font-bold rounded-xl ${panel==="pending" ? "bg-[#75a3c5]":"bg-[#345975]"}`} 
    onClick={()=>setPanel(prev=>prev="pending")} 
    >Pending applications</button>
    <button className={`px-2 py-1 text-white text-2xl font-bold rounded-xl ${panel==="history" ? "bg-[#75a3c5]":"bg-[#345975]"}`}  
    onClick={()=>setPanel(prev=>prev="history")}
    >Reviewed applications</button>
 </div>
 <div className="">
    {panel==="pending"? 
<span className="text-2xl">Pending organizer applications</span>
:
<span className="text-2xl">History organizer applications</span>
 }
 <div className="flex flex-col">
 <div className="flex max-w-[700px] w-full"> 
    <span className="text-xl px-4 py-1">Application name</span>
    <span className="text-xl px-4 py-1">Submission date</span>
    <span className="text-xl px-4 py-1">Status</span>
 </div>
 {applicants.map(a=>(
 <div className="flex">
<span>{a.name}</span>
<span>{formatTime(a.date)}</span>
<span>{a.status}</span>
 </div>))}
 </div>
 </div>
    </div>)
 }
 export default AdminCheckCard