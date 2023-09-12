import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import BioDatas from "../pages/BioDatas/BioDatas";
import MainLaout from "../Layout/mainLayout";
import BioData from "../pages/BioData/BioData";

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
    ],
  },
]);

export default router;
