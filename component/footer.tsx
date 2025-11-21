import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image"
import FooterCol from "./footerCol"
const Footer = () => {

  return (

    <footer className="bg-[#345975] w-full min-h-100 pt-10 px-5 h-full">
      <div className="flex mt-2 px-4 items-center">
        <div className="w-[50px] h-[50px] relative flex rounded-full overflow-hidden">
          <Image alt="logo" src="/logo_no_color.png" width={70} height={70} className="absolute w-[90px] h-[90px] max-w-none object-center -left-[15px] -top-[20px]"></Image>
        </div>
        <h1 className="text-2xl">CrossTrail</h1>
      </div>
      <div className="flex flex-col justify-between mx-auto max-w-7xl w-full px-10 mt-5 lg:flex-row">
        <FooterCol
          id="footer-product"
          title="Product"
          items={["Become an organizer",
            "Join activities",
            "Shop gear",
            "Safety guides",]}
        />
        <FooterCol
          id="footer-company"
          title="Company"
          items={["Contact",
            "Careers",
            "Pricing",
          ]}
        />
        <FooterCol
          id="footer-Legal"
          title="Terms & Conditions"
          items={["Privacy Policy",
            "Cookie Policy",
            "Refund Policy",
          ]}
        />
        <FooterCol
          id="footer-social"
          title="Community"
          items={["Support",
            "Gift Member",
          ]}
        />
      </div>
      <div className="flex flex-col mx-auto gap-3 max-w-7xl w-full md:justify-between mt-4 px-10 md:flex-row md:items-center">
        <div className="order-2 md:order-1">
          <span className="text-[12px] text-white">
            © 2025 CrossTrail.
            <br/>
            All rights reserved.
            CROSSTRAIL™ and the CrossTrail leaf-and-bird logo are trademarks of CrossTrail in Australia and certain other jurisdictions.
            <br />
            FIND YOUR NEXT ADVENTURE™ is a trademark of CrossTrail.
          </span>
        </div>
        <div className="flex gap-3 order-1 md:order-2">
          <FaInstagram className="w-10 h-10" />
          <AiFillTikTok className="w-10 h-10" />
          <FaYoutube className="w-10 h-10" />
          <FaSquareXTwitter className="w-10 h-10" />
        </div>
      </div>


    </footer>
  )
}
export default Footer