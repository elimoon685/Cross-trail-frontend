import LoginCard from "@/component/useClientComponent/loginCard";
import Image from "next/image"
const LoginAdmin=()=>{

    return(

        <div className="min-h-screen w-screen flex bg-[#f7f4da]">
    <div className="flex grow gap-50 justify-center lg:mx-40 lg:my-20">
    <div className="h-[calc(100vh-160px)] w-[calc((100vw-320px)/2.5)] relative px-10 hidden lg:flex">
    <Image src="/login_admin.png" alt="login-admin" fill className="object-cover" priority></Image>
    </div>
    <LoginCard role="Admin" 
           title={["Administer your hiking platform", "Sign in to manage user roles, review activity, and handle organizer applications"]}
           themeColor={["#f48f8a","#f8726b", "#FF3B30"]}
           footerWords={["Are you team leader?", "Sign here"]}

    />
    </div>
 </div>
    )
}
export default LoginAdmin