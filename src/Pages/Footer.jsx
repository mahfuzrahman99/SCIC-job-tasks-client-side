import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterImg from "../assets/Footer.jpg"

const Footer = () => {
  const backgroundImage = `url(${FooterImg})`;
    return (
      <div className="w-full text-black">
        <div className="md:grid grid-cols-2"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          // boxShadow: "12px 12px 0 12px rgba(0, 0, 0, 0.9)"
        }}>
        <div className="col-span-1 md:grid grid-cols-2  text-center pt-12">
          <div className="hidden md:block"></div>
          <div className="col-span-1">
            <h1 className="text-2xl font-medium">CONTACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="col-span-1 md:grid grid-cols-2 text-center pt-12">
          <div className="col-span-1 space-y-3">
            <p className="text-2xl font-medium">Follow US</p>
            <p>Join us on social media</p>
            <p className="flex justify-center items-center gap-2 text-4xl">
              <a href="https://www.facebook.com/profile.php?id=100027585996757"><FaFacebookSquare/></a>
              <a href="https://www.linkedin.com/in/mahfuzur-rahman-shabbir-0496752a4/"><FaLinkedin /></a>
              <a href="https://github.com/mahfuzrahman99"><FaGithubSquare /></a>
              <a href="mailto:mahfuzurrahmanshabbir@gmail.com" className="text-5xl"><MdEmail/></a>
            </p>
          </div>
          <div className="hidden md:block"></div>
        </div>
        <div className="col-span-2 text-center p-3 font-medium font-inter">
          <h1>Copyright © All rights reserved. by <span className="font-Signature font-extrabold text-xl">TaskManager</span></h1>
        </div>
      </div>
      </div>
    );
  };
  
  export default Footer;
  