import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex justify-between">
            <div className="w-64 min-h-screen hidden md:block bg-[#d4d5d6] bg-opacity-40 shadow-xl shadow-[#d4d5d6]">
              <ul className="menu p-4 fixed">
                <li>
                  <NavLink
                    to="/dashboard/user_profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
                    }
                  >
                    USER PROFILE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/create_task"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
                    }
                  >
                    CREATE A TASK
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/All_tasks"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
                    }
                  >
                    ALL TASKS
                  </NavLink>
                </li>
                <div className="divider"></div>
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
              </ul>
            </div>
            <div className="flex-1 bg-[#F6F6F6] overflow-x-auto">
              <Outlet />
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn md:hidden  bg-[#8a8b8c] w-full drawer-button"
          >
            OPEN DRAWER
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="">
            {/* Sidebar content here */}
            <div className="w-50 min-h-screen md:hidden bg-[#e5e8eb] bg-opacity-90 ">
              <ul className="menu p-4">
                <li>
                  <NavLink
                    to="/dashboard/user_profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
                    }
                  >
                    USER PROFILE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/create_task"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
                    }
                  >
                    CREATE A TASK
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/All_tasks"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#880606] hover:text-[#880606] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#8a8b8c] hover:font-bold  text-[#8a8b8c]"
                    }
                  >
                    ALL TASKS
                  </NavLink>
                </li>
                <div className="divider"></div>
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
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
