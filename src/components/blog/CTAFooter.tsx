import Link from "next/link"
import { FaYoutube } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const CTAFooter = () => {
  return (<div className="hidden lg:flex lg:w-[1320px] lg:my-20">
    <div className="flex flex-row w-full">
      <div className="basis-3/4">
        <a href="mailto:alysewang@hexschool.com" className="block text-[32px] font-medium w-full">alysewang@hexschool.com
        </a>
      </div>
      <div className="basis-1/4 flex items-center justify-end">
        <Link href="https://www.youtube.com/watch?v=_leRdFy7L4Q"><FaYoutube className="text-primary text-2xl m-2.5"/></Link>
        <Link href="https://podcasts.apple.com/tw/browse"><SiApplepodcasts className="text-primary text-2xl m-2.5"/></Link>
        <Link href="https://www.facebook.com/"><FaFacebook className="text-primary text-2xl m-2.5" /></Link>
        <Link href="https://www.linkedin.com/"><FaLinkedin className="text-primary text-2xl m-2.5" /></Link>
        <Link href="https://www.instagram.com/"><FaInstagram className="text-primary text-2xl m-2.5" /></Link>
      </div>
    </div>
  </div>)
}

export default CTAFooter