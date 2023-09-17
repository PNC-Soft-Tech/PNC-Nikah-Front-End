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
import BioLikes from "../pages/BioLikes/BioLikes";
import MyReports from "../pages/MyReports/MyReports";
import SendForm from "../pages/SendForm/SendForm";
import AboutUs from "../pages/AboutUs/AboutUs";
import Reports from "../pages/Reports/Reports";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import Instructions from "../pages/Instructions/Instructions";
import Payments from "../pages/Payments/Payments";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import Faq from "../pages/Faq/Faq";
import ContactUs from "../pages/ContactUs/ContactUs";

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
        path: "/send-form",
        element: <SendForm />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/send-form",
        element: <SendForm />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndConditions />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
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
