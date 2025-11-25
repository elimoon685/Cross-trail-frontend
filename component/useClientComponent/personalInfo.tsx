'use client'
import {useFormContext } from "react-hook-form";
import { FormValues } from "@/interface/userRequestType";
const PersonalInfoForm=()=>{
    const { register } = useFormContext<FormValues>();
    return (
        <div className="flex flex-col">
        <h1 className="text-[18px] font-bold self-start">Personal information</h1>
        <div className="columns-1 md:columns-2 [column-gap:100px] mt-2">
        <div className="flex flex-col">
        <div className="flex flex-col">
            <label htmlFor="firstName" className="block text-[14px] self-start">First name</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="FirstName"
            {...register("firstName")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="lastName" className="block text-[14px] self-start">Last name</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="LastName"
            {...register("lastName")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="birthday" className="block text-[14px] self-start">Date of birth</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Date of birth"
            type="date"
            {...register("lastName")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="country" className="block text-[14px] self-start">Country</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Country"
            {...register("country")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="phone" className="block text-[14px] self-start">Mobile phone</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Mobile number"
            {...register("phone")} 
               />
        </div>
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="email" className="block text-[14px] self-start">Email</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Email"
            {...register("email")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="city" className="block text-[14px] self-start">City</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="City"
            {...register("city")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="password" className="block text-[14px] self-start">Password</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Enter your password"
            type="password"
            {...register("password")} 
               />
        </div>
        <div className="flex flex-col mt-3">
            <label htmlFor="confirmPassword" className="block text-[14px] self-start">Confirm password</label>
            <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm mt-1"
            placeholder="Confirm your password"
            {...register("confirmPassword")} 
               />
        </div>
        


        </div>
        
        </div>
    )
}
export default PersonalInfoForm