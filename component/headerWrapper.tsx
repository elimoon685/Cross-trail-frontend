
import Footer from "./footer"
import Header from "./header.tsx"

const HeaderFooterWrapper=({children}:Readonly<{children: React.ReactNode}>)=>{
    return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>)
}
export default HeaderFooterWrapper