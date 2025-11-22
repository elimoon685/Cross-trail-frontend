import LoginCard from "@/component/useClientComponent/loginCard"
import Image from "next/image"
const Login=()=>{

return (
 <div className="min-h-screen w-screen flex bg-[#f7f4da]">
    <div className="mx-40 my-20 flex grow gap-50">
    <div className="h-[calc(100vh-160px)] w-[calc((100vw-320px)/2.5)] relative px-10 flex">
    <Image src="/login_participants.png" alt="login-participants" fill className="object-cover" priority></Image>
    </div>
    <LoginCard role="Participants" 
               title={["Join your next hiking group", "Sign in to find teammates, view routes, and track your hikes"]}
               themeColor={["#c3ede1","#90c8b8", "#5D9787"]}
               footerWords={["Are you team leader?", "Sign here"]}

               />
    </div>
 </div>
)
}
export default Login