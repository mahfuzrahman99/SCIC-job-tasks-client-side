/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../Provider/AuthProvider";
// import useUsers from "../../Hooks/useUsers";
// import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
//   const [users] = useUsers();
//   const [isAdmin] = useAdmin();
//   const [isOrganizer, setOrganizer] = useState(false);
//   const [isParticipant, setParticipant] = useState(false);
//   const [isProfessional, setProfessional] = useState(false);

//   useEffect(() => {
//     const userRole = users.find((u) => u?.email === user?.email);
//     console.log(userRole?.role);
//     //Organizer
//     if (userRole) {
//       if (userRole.role === "Organizer") {
//         setOrganizer(true); //Participant
//       } else if (userRole.role === "Participant") {
//         setParticipant(true); //Professionals
//       } else if (userRole.role === "Professionals") {
//         setProfessional(true);
//       }
//     }
//   }, [user, users]);



  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
              : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
              : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
          to={'/dashboard/user_profile'}
            // to={
            //   isOrganizer || isAdmin
            //     ? "/organizer/organizer_profile"
            //     : isParticipant
            //     ? "/participant/participant_profile"
            //     : isProfessional
            //     ? "/professional/professional_profile"
            //     : ""
            // }
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
            }
          >
            DASHBOARD
          </NavLink>
        ) : (
          ""
        )}
      </li>
    </>
  );


  const handleLogout = () => {
    logOut()
      .then(() => {
        Navigate("/login");
      })
      .catch(() => {});
  };

  return (
    <div className="navbar z-50">
      <div className="navbar-start w-full md:w-2/4">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline border-none hover:bg-transparent lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 z-50 text-[#880606]"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm absolute dropdown-content mt-3 z-[50] p-2 shadow bg-black bg-opacity-90 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-3">
        <div className="">
            <h1
              className={`text-3xl  mt-2 font-bold font-Signature hidden md:block ${"text-[#880606] md:ml-5"
              }`}
            >
              TaskManagement
            </h1>
            <h1
              className={`text-3xl  mt-2 font-bold font-Signature md:hidden ${"text-[#880606]"
              }`}
            >
              TaskManagement
            </h1>
          </div>
        </div>
      </div>

      <div className="navbar-end w-2/4">
        <div className=" hidden lg:flex justify-center items-center">
          <ul className="menu menu-horizontal text-black">{navLinks}</ul>
        </div>
        <div className="dropdown dropdown-end flex items-center md:mr-5">
          {user ? (
            <>
              <div className="dropdown z-10 dropdown-bottom dropdown-end">
                <motion.figure
                  tabIndex={0}
                  animate={{
                    scale: [1, 1, 1, 1, 1],
                    rotate: [0, 0, 0, 0, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <img
                    src={user?.photoURL}
                    className="h-[35px] md:h-[50px] w-[35] md:w-[50px] rounded-full"
                    alt={user?.displayName ? user?.displayName : "Not Found"}
                  />
                </motion.figure>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow rounded-box w-64 bg-black bg-opacity-90 font-bold"
                >
                  <li>
                    <a className="text-[#8a8b8c]">
                      {user?.displayName ? user?.displayName : "Not Found"}
                    </a>
                  </li>
                  <li>
                    <a>
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          ease: "linear",
                          duration: 0.5,
                          x: { duration: 0.5 },
                        }}
                        onClick={handleLogout}
                        className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent  text-[#8a8b8c]"
                      >
                        Logout
                      </motion.button>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                ease: "linear",
                duration: 0.5,
                x: { duration: 0.5 },
              }}
              className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent text-[#47b2f1] hover:text-[#47b2f1]"
            >
              <Link to={`/login`}>Login</Link>
            </motion.button>
          )}
          <label
            tabIndex={0}
            // className="btn btn-outline btn-circle border-none hover:bg-transparent avatar"
          >
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
