import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import BioDatas from "../pages/BioDatas/BioDatas";
import MainLaout from "../Layout/mainLayout";
import BioData from "../pages/BioData/BioData";
import EditBiodata from "../pages/EditBiodata/Sidebar";

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
        path: "/biodata",
        element: <BioData />,
      },
      {
        path: "/biodatas",
        element: <BioDatas />,
      },
      {
        path: "/edit-biodata",
        element: <EditBiodata />,
      },
    ],
  },
]);

export default router;
