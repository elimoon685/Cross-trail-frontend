import LoginCard from "@/component/useClientComponent/loginCard";
import Image from "next/image"
import { Metadata } from "next";
export const metadata: Metadata = {
    
       title: "Login - Organizer",
       description: "Login for organizer",
       
     };
   
const OrganizerLogin=()=>{
return (

    <div className="min-h-screen w-screen flex bg-[#f7f4da]">
    <div className=" flex grow gap-50 justify-center lg:mx-40 lg:my-20">
    <div className="h-[calc(100vh-160px)] w-[calc((100vw-320px)/2.5)] relative px-10 hidden lg:flex">
    <Image src="/login_organizer.png" alt="login-organizer" fill className="object-cover" priority></Image>
    </div>
    <LoginCard role="Team leader" 
           title={["Lead your hiking adventures", "Sign in to create events, manage participants, and share the routes"]}
           themeColor={["#75a3c5","#4c7a9d", "#345975"]}
           footerWords={["Looking or a team?", "Sign in as participants"]}

    />
    </div>
 </div>

)
}
export default OrganizerLogin