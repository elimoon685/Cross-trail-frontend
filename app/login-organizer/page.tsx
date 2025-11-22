import LoginCard from "@/component/useClientComponent/loginCard";
import Image from "next/image"

const OrganizerLogin=()=>{
return (

    <div className="min-h-screen w-screen flex bg-[#f7f4da]">
    <div className="mx-40 my-20 flex grow gap-50">
    <div className="h-[calc(100vh-160px)] w-[calc((100vw-320px)/2.5)] relative px-10 flex">
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