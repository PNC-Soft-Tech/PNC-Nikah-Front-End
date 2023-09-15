import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import BioDatas from "../pages/BioDatas/BioDatas";
import MainLaout from "../Layout/mainLayout";
import BioData from "../pages/BioData/BioData";
import EditBiodata from "../pages/EditBiodata/Sidebar";
import Faq from "../pages/Faq/Faq";
import Contact from "../pages/Contact/Contact";

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
      {
        path: "/faq",
        element: <Faq />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
