
import Image from "next/image";
import { HiOutlineArrowDown } from "react-icons/hi";
import Navbar from "@/component/scrollNavbar";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="h-[calc(100vh-60px)] relative">
    <Image alt="homepage" src="/homepage.png" fill className="object-cover" priority></Image>
    <div className="flex flex-col absolute top-[50%] left-[50%] -translate-1/2 gap-5">
      <h1 className="text-4xl text-white self-center">Discover Your Next Adventure</h1>
      <p className="text-xl  text-white self-center">Find local hikes and join guied teams</p>
    </div>
    <div className="flex w-10 h-10 border border-black absolute left-[50%] top-[92%] -translate-1/2 cursor-pointer justify-center rounded-full bg-gray-100 opacity-30 hover:opacity-50"><HiOutlineArrowDown className="h-7 w-7 self-center"/></div>
    </div>
  
    <Navbar/>
    <div className="h-[calc(100vh-80px)] relative scroll-mt-20" id="organizer">
      <Image alt="teamleader" src="/team leader.png" fill className="object-cover" priority></Image>
      <div className="flex absolute top-[50%] left-[50%] -translate-1/2"><h1 className="text-4xl text-white self-center">Become organizer and publish your activity</h1></div>
      <div className="absolute top-[70%] left-[50%] -translate-1/2 flex gap-20 flex-wrap">
      <button className="text-2xl text-white px-4 py-2 border border-[#345975] rounded-3xl bg-[#345975] hover:opacity-70 hover:scale-105 transform transition duration-200 ease-out cursor-pointer ">Register as an organizer</button>

       <button className="text-2xl text-white px-4 py-2 border border-[#345975] rounded-3xl bg-[#345975] hover:opacity-70 hover:scale-105 transform transition duration-200 ease-out cursor-pointer">Already have account? Login</button>
       </div>
    </div>
    <div className="h-[calc(100vh-80px)] relative scroll-mt-20" id="join">
      <Image alt="participants" src="/paticipants.png" fill className="object-cover" priority></Image>
      <div className="flex absolute top-[50%] left-[50%] -translate-1/2"><h1 className="text-4xl text-white self-center">Become Particpants and join the activity</h1></div>
      <div className="absolute top-[70%] left-[50%] -translate-1/2 flex gap-20 flex-wrap">
      <button className="text-2xl text-white px-4 py-2 border border-[#5D9787] rounded-3xl bg-[#5D9787] hover:opacity-70 hover:scale-105 transform transition duration-200 ease-out cursor-pointer ">Register as participants</button>

       <button className="text-2xl text-white px-4 py-2 border border-[#5D9787] rounded-3xl bg-[#5D9787] hover:opacity-70 hover:scale-105 transform transition duration-200 ease-out cursor-pointer">Already have account? Login</button>
       </div>
    </div>
    <div className="h-[calc(100vh-80px)] relative scroll-mt-20" id="shop" >
      <Image alt="shop" src="/shop.png" fill className="object-cover" priority></Image>
      <div className="flex absolute top-[50%] left-[50%] -translate-1/2"><h1 className="text-4xl text-white self-center">Check items you need</h1></div>
      <div className="absolute top-[70%] left-[50%] -translate-1/2 flex gap-20 flex-wrap">
      <Link href="/shop" className="text-2xl text-white px-4 py-2 border border-[#FF3B30] rounded-3xl bg-[#FF3B30] hover:opacity-70 hover:scale-105 transform transition duration-200 ease-out cursor-pointer">Shop now</Link>
       </div>
    </div>
    <div className="h-20"></div>

    
    
    </>
  );
}
