import contactBanner from "../assets/ContactUsBanner.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsStopwatch } from "react-icons/bs";
// import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import ContactDiv from "./ContactDiv";
import Navbar from "./Navbar";

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fsiuqse', 'template_k2ek7hd', form.current, '_Ry7faN3cOvUnjYMa')
        .then((result) => {
            if(result.text){
              Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Your message has been send",
                  showConfirmButton: false,
                  timer: 1500
                  });
              }
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <div className="shadow-[#00000040] shadow-xl">
          <img
            className="w-full h-[40vh] md:h-[80vh]"
            src={contactBanner}
            alt=""
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="my-8">
            <div className="md:flex justify-center space-y-2 md:space-y-0 items-center gap-4 mt-4">
              <ContactDiv
                icon={<LuPhoneCall />}
                heading="PHONE"
                desc1="+38 (012) 34 56 789"
              />
              <ContactDiv
                icon={<SlLocationPin />}
                heading="ADDRESS"
                desc1="+38 (012) 34 56 789"
              />
              <ContactDiv
                icon={<BsStopwatch />}
                heading="WORKING HOURS"
                desc1="Mon - Fri: 08:00 - 22:00"
                desc2="Sat - Sun: 10:00 - 23:00"
              />
            </div>
          </div>
          <div className="my-8 md:mb-56">
            <div>
              <div className=" rounded-lg p-2 md:px-20 md:pt-20 md:pb-12 bg-[#d9d4d4]">
                <form ref={form} onSubmit={sendEmail} className="md:grid grid-cols-2 gap-3  font-inter">
                  <div className="form-control col-span-1">
                    <label className="label">
                      <span className="label-text  ">Name*</span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      className="p-3 rounded-md "
                      required
                    />
                  </div>
                  <div className="form-control col-span-1">
                    <label className="label">
                      <span className="label-text  ">Email*</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      className="p-3 rounded-md "
                      required
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <label className="label">
                      <span className="label-text  ">Phone*</span>
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="Phone"
                      className="p-3 rounded-md "
                      required
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <label className="label">
                      <span className="label-text  ">Message*</span>
                    </label>
                    <textarea
                      name="message"
                      id=""
                      className="col-span-2 rounded-md p-4"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="flex justify-center col-span-2 mt-3 md:mt-10">
                    <div className="flex justify-center gap-1 p-3 rounded-lg items-center bg-gradient-to-r from-[#8a8b98] to-[#00000040]">
                      <input
                        type="submit"
                        value="Send Message"
                        className="text-white font-medium"
                      />
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.7358 3.29705C22.8078 2.82305 22.6058 2.34805 22.2148 2.06905C21.8238 1.79105 21.3088 1.75605 20.8838 1.97905C17.4828 3.76505 5.58577 10.011 1.93177 11.929C1.48077 12.165 1.21477 12.647 1.25377 13.154C1.29277 13.661 1.62877 14.097 2.11077 14.262C3.53377 14.749 5.27277 15.346 7.99977 16.281L18.9998 6.00005L10.0978 17C13.0058 17.997 17.5528 19.556 18.6938 19.9471C19.0508 20.0701 19.4448 20.0271 19.7678 19.8321C20.0908 19.6361 20.3098 19.3071 20.3668 18.9331L22.7358 3.29705Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.83154 17.623V20.893C8.83154 21.395 9.12654 21.85 9.58354 22.055C10.0415 22.261 10.5765 22.179 10.9515 21.845L13.7895 19.323L8.83154 17.623Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
