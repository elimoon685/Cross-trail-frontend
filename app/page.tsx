
import Image from "next/image";
import { HiOutlineArrowDown } from "react-icons/hi";
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
  
    <div className="flex h-[80] max-w-7xl static w-full mx-auto">
      <div className="flex gap-10 border-b border-[#5D9787]">
      <div className="text-3xl self-center font-bold">What you can do</div>
      <ul className="flex justify-between items-center gap-8">
        <li className="flex text-xl border-b-2 border-transparent hover:border-b-2 hover:border-[#5D9787] h-full items-center w-[163px] justify-center"><a className="">Become organizer</a></li>
        <li className="flex text-xl border-b-2 border-[#5D9787] h-full items-center w-[163px] justify-center"><a className="">Join activity</a></li>
        <li className="flex text-xl border-b-2 border-[#5D9787] h-full items-center w-[163px] justify-center"><a className="">Shop</a></li>
      </ul>
    </div>
    </div>
    <div className="h-[100px] mt-10"></div>
    </>
  );
}
