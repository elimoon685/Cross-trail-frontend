'use client'
import { useState } from "react"
import { LoginFormData } from "@/interface/userRequestType"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
type LoginCardPros = {
role:string,
title:string[],
themeColor:string[],
footerWords:string[],
}
const LoginCard = ({role,title, themeColor, footerWords }:LoginCardPros) => {

  const [loginData, setLoginData] = useState<LoginFormData>({ email: "", password: "" })
  const [show, setShowPassword] = useState<boolean>(false);
  const handleSubmit = async () => {

  }
  return (
    <div className="flex flex-col max-w-[500px] px-10 self-center bg-white w-full py-10">
      <div className="self-start px-2 py-1 rounded-sm flex" style={{ backgroundColor: themeColor[2] }}>
        <span className="text-gray-300">{role}</span>
      </div>
      <div className="mt-4 flex flex-col">
        <p className="text-4xl font-bold">{title[0]}</p>
        <p className="text-xl mt-3">{title[1]}</p>
      </div>
      <div className="flex w-full mt-4">
        <div className="flex-1 h-5" style={{ backgroundColor: themeColor[0] }}></div>
        <div className="flex-1 h-5" style={{ backgroundColor: themeColor[1] }}></div>
        <div className="flex-1 h-5" style={{ backgroundColor: themeColor[2] }}></div>
      </div>


      <form onSubmit={handleSubmit}>

        <div className="mt-4">
          <label htmlFor="email" className="block text-[18px] font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
            className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-[18px] font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
              className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              required
            />
            <button type="button"
              className='absolute top-[30%] left-[91%]'
              onClick={() => { setShowPassword(prev => !prev) }}
            >
              {show ? <IoEyeOutline className="h-6 w-6" /> : <IoEyeOffOutline className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className="text-right mt-2"> <span className="text-end hover:underline">Forget your password?</span></div>
        <button className='w-full text-white text-center py-3 text-xl mt-4 rounded-lg font-bold' style={{ backgroundColor: themeColor[2] }}
          type="submit"
        >
          {`Sign as ${role}`}
        </button>
      </form>
      <div className="text-center mt-3">
      <span>{footerWords[0]}<Link href="/login-organizer" className=" hover:underline" style={{color:themeColor[2]}}>{footerWords[1]}</Link></span>
      </div>
    </div>
  )
}
export default LoginCard