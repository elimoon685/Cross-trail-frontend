'use client'
import Image from "next/image";
import { useState, useRef, useEffect} from "react";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
const Header=()=>{

    const [openLogin, setOpenLogin]=useState<boolean>(false)
    const loginRef = useRef<HTMLDivElement |null>(null);
    useEffect(()=>{
       if(!openLogin) return;
        const onClickDown=(e:PointerEvent)=>{
             const el=loginRef.current
             if(!el) return;
             if(el.contains(e.target as Node)) return;
             setOpenLogin(false)
        }
        document.addEventListener("pointerdown", onClickDown)
        return ()=>document.removeEventListener("pointerdown", onClickDown)

    },[openLogin])

    return (
        <header className="w-full flex justify-between px-10 h-[60px] items-center">
         <div className="flex items-center">
            <div className="w-[50px] h-[50px] overflow-hidden relative">
            <Image src="/logo.png" alt="logo" width={70} height={70} className="w-[70px] h-[70px] max-w-none object-center absolute -left-[15px] -top-[10px]"></Image>
            </div>
            <h1 className="text-2xl">CrossTrail</h1>
         </div>
         <div className="relative inline-block group">
         <button className="rounded-2xl px-4 py-1 border border-[#345975] hover:bg-[#345975] hover:text-white cursor-pointer" onClick={()=>setOpenLogin(prev=>!prev)}>Login</button>
         <div
    className={`
      fixed right-0 top-15
    ${openLogin ? "translate-x-0" : "translate-x-full"}
    transform transition-transform
    w-50  rounded border bg-white shadow p-1 
    z-999
    `} ref={loginRef}
  >
    <div className="flex flex-col">
        <Link href={`/login-admin`}>
        <span className="flex gap-3 items-center hover:bg-[#FF3B30] rounded px-2 py-2 cursor-pointer"><RxAvatar className="w-8 h-8"/><span className="text-xl font-bold">Admin</span></span>
        </Link>
        <Link href={`/login-organizer`}>
        <span className="flex gap-3 items-center hover:bg-[#345975] rounded px-2 py-2 cursor-pointer"><RxAvatar className="w-8 h-8"/><span className="text-xl font-bold">Organizer</span></span>
        </Link>
        <Link href={`/login-participants`}>
        <span className="flex gap-3 items-center hover:bg-[#5D9787] rounded px-2 py-2 cursor-pointer"><RxAvatar className="w-8 h-8"/><span className="text-xl font-bold">Participant</span></span>
        </Link>
    </div>
    
  </div>
         </div>

        </header>
    )
}
export default Header