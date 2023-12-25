// import BannerImg from "../assets/Banner.gif"
import { Link } from "react-router-dom";
import BannerImage from "../../public/BannerHome.json"
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Banner = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className="rounded-b-2xl shadow-2xl shadow-[#00000040]">
            <div className="md:grid grid-cols-2 items-center gap-4 max-w-6xl mx-auto py-10 px-3 md:px-0">
                <div className="col-span-1 md:space-y-4">
                    <p className="md:text-3xl text-lg font-semibold md:font-bold">The Adaptive Nature of Tashk Management for Superior Organizational Performance</p>
                    <p className="hidden md:block">
                    Tashk Management is a dynamic discipline that includes organizing, directing, managing, and strategically planning activities. Setting goals and doing thorough analysis are key components of strategic planning, whereas efficient delegation and teamwork are the main components of organization. The directing phase unites teams with the organizational vision by emphasizing inspiration and leadership. Controlling entails keeping an eye on output and facilitating ongoing development. Tashk Management is flexible, changing to keep up with advances in technology and changes in society. It offers an adaptable framework that can be used in a variety of industries and leads businesses to success through productivity, creativity, and long-term viability.
                    </p>
                    <p className="md:hidden">
                    The dynamic discipline of Tashk Management includes continual control, effective organization, motivational leadership, and strategic planning. It offers a flexible foundation for success in a variety of industries through productivity, creativity, and long-term viability. It adjusts to changes in technology and society.
                    </p>
                    <Link to={user ? "/dashboard/user_profile" : "/login"} className="btn btn-ghost border-none bg-gray-300 hover:bg-red-400 md:w-4/12 text-black">Let’s Explore</Link>
                </div>
                <div className="col-span-1">
                    {/* <img src={BannerImg} className="h-full w-full" alt="" /> */}
                    <Lottie animationData={BannerImage} width={350} height={450} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;