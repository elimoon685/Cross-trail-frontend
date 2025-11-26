'use client'
import { useQuery } from "@tanstack/react-query";
import { AdminApi } from "@/api/admin";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { examplesOfScreenshots } from "@/data/applicants";
const AdminCheckBoard = (initialData: any) => {

  const { data } = useQuery({
    queryKey: ["admin-application"],
    queryFn: async () => {
      const res = await AdminApi.UpdateApplicationStatus({ id: "01010", status: "approved" });
      return res.data.data;
    },
    initialData,
  });
  return (
    <div className="flex flex-col grow max-w-[1000px] w-full px-10 py-10 gap-10">
      <p className="text-3xl">Review application</p>
     <div className="flex flexcol md:flex-row bg-white px-10 py-10">
      <div className="flex flex-col">
      <div className="flex flex-col">
            <label htmlFor="firstName" className="block text-[14px] self-start">First name</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Elinor"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="lastName" className="block text-[14px] self-start">Last name</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Lin"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="country" className="block text-[14px] self-start">Country</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Australia"
            readOnly
           
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="phone" className="block text-[14px] self-start">Mobile phone</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="+61 0491667024"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="email" className="block text-[14px] self-start">Email</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="linsophymoon@gmail.com"
            readOnly
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="city" className="block text-[14px] self-start">City</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Sydney"
            readOnly
               />
        </div>

      </div>
      <div className="flex flex-col">
      <label htmlFor="city" className="block text-[14px] self-start">Proof of experience{examplesOfScreenshots.length+" screenshots"}</label>
      <div>

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

    </div>
  )
}
export default AdminCheckBoard