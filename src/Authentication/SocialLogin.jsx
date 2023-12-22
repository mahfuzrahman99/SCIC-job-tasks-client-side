/* eslint-disable react/prop-types */
import { useContext } from "react";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = ({ disabled }) => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        navigate(location?.state ? location.state : "/");
        axiosPublic.post("/users", userInfo).then(() => {
          swal("Success!", "Login Successfully!", "success");
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch(() => {
        swal("Error!", "Please check your email or password!", "error");
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then(() => {
          swal("Success!", "Login Successfully!", "success");
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch(() => {
        swal("Error!", "Please check your email or password!", "error");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2 my-2">
        <button
          disabled={disabled}
          onClick={handleGoogleLogin}
          className="btn border btn-outline w-1/2 border-none text-white border-blue-500 bg-[#427897] uppercase hover:text-black hover:bg-[#427897] rounded-md"
        >
          <FcGoogle />
          Google
        </button>
        <button
          disabled={disabled}
          onClick={handleGithubLogin}
          className="btn border btn-outline w-1/2 border-none text-white border-black bg-[#427897] uppercase hover:text-black hover:bg-[#427897] rounded-md"
        >
          <FaGithub />
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
