'use client'
import Footer from "./footer"
import Header from "./header.tsx"
import { usePathname } from "next/navigation";
const HeaderFooterWrapper=({children}:Readonly<{children: React.ReactNode}>)=>{

    const pathName=usePathname();
    const hiddenRouter=["/login-admin", "/login-participants", "/login-organizer", "/register-organizer","/shop/check-out"]
    const hiddenRounterForFooter=["/admin-check"]
    const hiddenFooter = hiddenRounterForFooter.some(route =>
        pathName.startsWith(route)
      );
    const hiddenLayout=hiddenRouter.includes(pathName);

    return (
    <>
    {!hiddenLayout && <Header/>}
    {children}
    {(!hiddenLayout && !hiddenFooter) && <Footer/>}
    </>)
}
export default HeaderFooterWrapper