import LoginCard from "@/component/useClientComponent/loginCard";
import Image from "next/image"
const LoginAdmin=()=>{

    return(

        <div className="min-h-screen w-screen flex bg-[#f7f4da]">
    <div className="mx-40 my-20 flex grow gap-50">
    <div className="h-[calc(100vh-160px)] w-[calc((100vw-320px)/2.5)] relative px-10 flex">
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