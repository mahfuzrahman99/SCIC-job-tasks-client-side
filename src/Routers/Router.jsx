import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ContactUs from "../Pages/ContactUs";
import UserDashboard from "../Layouts/UserDashboard";
import UserProfile from "../Pages/Dashboard/UserProfile";
import CreateTask from "../Pages/Dashboard/CreateTask";
import AllTasks from "../Pages/Dashboard/AllTasks";
import Outlets from "../Layouts/Outlets";
import PrivetRout from "../Components/PrivetRout";
// import PrivetRout from "../Components/PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlets />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path:"dashboard",
    element:<PrivetRout><UserDashboard/></PrivetRout>,
    children:[
      {
        path:"user_profile",
        element: <UserProfile/>,
      },
      {
        path:"create_task",
        element: <CreateTask/>,
      },
      {
        path:"All_tasks",
        element: <AllTasks/>,
      },
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
