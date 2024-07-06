import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md"; 
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <div className="md:bg-footerBg h-[45rem] grid md:grid-cols-2 justify-center font-customFont pt-16 mt-20">
        <div className="w-1/3 ps-10 space-y-4 sm:mx-auto">
          <img src="/public/images/more/logo1.png" className="w-20" alt="" />
          <h1 className="text-2xl font-extrabold">Espresso Emporium</h1>
          <p className="text-wrap">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3 text-xl">
            <Link><p><FaFacebookF></FaFacebookF></p></Link>
            <Link> <p><BsTwitterX></BsTwitterX></p></Link>
            <Link><p><RiInstagramLine></RiInstagramLine></p></Link>
            <Link><p><FaLinkedin></FaLinkedin></p></Link>
           
            
            
          </div>
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <h2 className="flex gap-1 items-center"><IoCall></IoCall> +880123456789</h2>
          <h2 className="flex gap-1 items-center"><MdEmail></MdEmail>salmanFaiz@dot.com</h2>
          <h2 className="flex gap-1 items-center"><FaLocationDot></FaLocationDot>bm dot dot dhaka</h2>
        </div>
        <div className=" w-1/3 ps-10 sm:mx-auto">
          <h1 className="text-3xl mb-6 font-bold">Contact With Us</h1>
          <form className="space-y-4">
            <input
              className="w-3/4 px-2 py-3 rounded-2xl"
              type="text"
              name="name"
              placeholder="Name"
              id=""
            />{" "}
            <br />
            <input
              className="w-3/4 px-2 py-3 rounded-2xl"
              type="text"
              name="email"
              placeholder="Email"
              id=""
            />
            <br />
            <input
              className="w-3/4 px-2 py-8 rounded-2xl"
              type="text"
              name="message"
              placeholder="Message"
              id=""
            />{" "}
            <br />
            <input
              className="btn border-2 border-yellow-950 bg-amber-300 text-yellow-950"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      <div className="bg-[url('/public/images/more/24.jpg')]">
        <p className="text-white font-bold text-xl text-center py-2">CopyRight Espresso Emporium 2024</p>
      </div>
    </div>
  );
};

export default Footer;
