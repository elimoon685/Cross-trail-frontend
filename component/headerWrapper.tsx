'use client'
import Footer from "./footer"
import Header from "./header.tsx"
import { usePathname } from "next/navigation";
const HeaderFooterWrapper=({children}:Readonly<{children: React.ReactNode}>)=>{

    const pathName=usePathname();
    const hiddenRouter=["/login-admin", "/login-participants", "/login-organizer", "/register-organizer"]
    const hiddenRounterForFooter=["/admin-check"]
    const hiddenFooter=hiddenRounterForFooter.includes(pathName)
    const hiddenLayout=hiddenRouter.includes(pathName);

    return (
    <>
    {!hiddenLayout && <Header/>}
    {children}
    {(!hiddenLayout && !hiddenFooter) && <Footer/>}
    </>)
}
export default HeaderFooterWrapper