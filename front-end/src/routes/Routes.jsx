import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLaout from "../Layout/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
