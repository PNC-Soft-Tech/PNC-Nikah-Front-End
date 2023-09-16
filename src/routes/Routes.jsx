import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import BioDatas from "../pages/BioDatas/BioDatas";
import MainLaout from "../Layout/mainLayout";
import BioData from "../pages/BioData/BioData";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/Login/Login";
import UserLayout from "../Layout/userLayout";
import EditBiodata from "../pages/EditBiodata/Editbiodata";
import DashBoard from "../pages/DashBoard/DashBoard";
import BioDisLikes from "../pages/BioDisLIkes/BioDisLikes";
import BioLikes from "../pages/BioLikes/BioLikes";
import Favorite from "../pages/Favorite/Favorite";
import MyReports from "../pages/MyReports/MyReports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biodata/:id",
        element: <BioData />,
      },
      {
        path: "/biodatas",
        element: <BioDatas />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user/account",
        element: <UserLayout />,
        children: [
          {
            path: "/user/account/edit-biodata",
            element: <EditBiodata />,
          },
          {
            path: "/user/account/preview-biodata/:id",
            element: <BioData />,
          },
          { path: "/user/account/dashboard", element: <DashBoard /> },
          {
            path: "/user/account/dislikes",
            element: <BioLikes />,
          },
          {
            path: "/user/account/likes",
            element: <BioLikes />,
          },
          {
            path: "/user/account/myreports",
            element: <MyReports />,
          },
        ],
      },
    ],
  },
]);

export default router;
