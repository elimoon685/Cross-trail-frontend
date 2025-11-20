import Image from "next/image";
const Header=()=>{



    return (
        <header className="w-full flex justify-between px-10 h-[60px] items-center">
         <div className="flex items-center">
            <div className="w-[50px] h-[50px] overflow-hidden relative">
            <Image src="/logo.png" alt="logo" width={70} height={70} className="w-[70px] h-[70px] max-w-none object-center absolute -left-[15px] -top-[10px]"></Image>
            </div>
            <h1 className="text-2xl">CrossTrail</h1>
         </div>
         <button className="rounded-2xl px-4 py-1 border border-[#345975] hover:bg-[#345975] hover:text-white cursor-pointer">Login</button>
        </header>
    )
}
export default Header