import registerImg from "../../public/Register.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "./SocialLogin";
import Lottie from "lottie-react";


const Register = () => {
  const [show, setShow] = useState(true);
  const { createUser, updateTheProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  // State for captcha validation
  const [captchaValidated, setCaptchaValidated] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
      createUser(email, password)
        .then(() => {
          updateTheProfile(name, photoURL)
            .then(() => {
              // navigate("/");
              const userInfo = { name, photoURL, password, email };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  e.target.reset();
                  swal("Success!", "Registration Successfully!", "success");
                  navigate(location?.state ? location.state : "/dashboard/user_profile");
                }
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          swal("Error!", "Please check your email or password!", "error");
        });
    } else {
      swal(
        "Error",
        "Your Password Must Be 6 characters or longer and have at least an uppercase, a special character, and a numeric character",
        "error"
      );
      return;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleCaptchaValidation = (isValid) => {
    // Set the captcha validation status
    setCaptchaValidated(isValid);
  };

  return (
    <>
      <div className="bg-gray-300">
        <div className="flex justify-center  items-center  lg:p-12 ">
          <div className="md:grid grid-cols-2 justify-center items-center gap-8 border-b-4 border-r-4 border-[#00000040] shadow-xl md:mx-28 bg-gray-300 rounded-2xl">
            <div className="">
              <form
                onSubmit={handleRegister}
                className="py-6 px-8 m-4 md:px-12"
              >
                <div className="text-center ">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Register your account!
                  </h1>
                  <br />
                  <hr className="" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  ">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <div>
                    <label className="label">
                      <span className="label-text ">Password</span>
                    </label>
                    <input
                      type={!show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="p-3 rounded-md bg-[#F3F3F3] w-full"
                      required
                    />
                    <div className="absolute top-12 right-2">
                      <span
                        className="text-xl  font-extrabold"
                        onClick={() => setShow(!show)}
                      >
                        {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className=""
                    required
                  />
                  <p className="text-base font-normal text-[#706F6F]">
                    Accept Terms & Conditions
                  </p>
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-[#f75b5f] uppercase hover:text-black hover:bg-[#f75b5f] rounded-md text-white border-none ">
                    Register
                  </button>
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-semibold">
                    Login With...!!
                  </p>
                  {/* Pass the disabled state to SocialLogin */}
                  <SocialLogin disabled={!captchaValidated} />
                </div>
                <p className="text-center mt-2 text-[#706F6F]">
                  Already have an account? Please
                  <Link className="text-[#F75B5F] font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
            <div className="col-span-1">
              {/* <img
                src={registerImg}
                className=" md:mr-7 hidden md:block h-[550px] w-full"
                alt=""
              /> */}
              <Lottie animationData={registerImg} width={350} height={450} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
