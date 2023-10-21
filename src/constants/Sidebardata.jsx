/* eslint-disable no-unused-vars */
import {
  BiSolidDashboard,
  BiEdit,
  BiListCheck,
  BiListUl,
  BiSolidAddToQueue,
} from "react-icons/bi";

import { BsFlag } from "react-icons/bs";

import { FiSettings, FiLogOut } from "react-icons/fi";

const sidebarDetails = [
  {
    icon: (
      <BiSolidDashboard className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "ড্যাশবোর্ড",
    path: "/user/account/dashboard",
  },
  {
    icon: (
      <BiEdit className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "বায়োডাটা এডিট করুন",
    path: "/user/account/edit-biodata",
  },
  {
    icon: (
      <BiListCheck className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "পছন্দের তালিকা ",
    path: "/user/account/likes",
  },
  {
    icon: (
      <BiListUl className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "অপছন্দের তালিকা ",
    path: "/user/account/dislikes",
  },
  {
    icon: (
      <BiSolidAddToQueue className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "আমার বায়োডাটা ক্রয়সমূহ",
    path: "/user/account/purchases",
  },
  {
    icon: (
      <BiSolidAddToQueue className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "পেমেন্ট এবং রিফান্ড ",
    path: "/user/account/payment-and-refund",
  },
  {
    icon: (
      <BsFlag className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "সাপোর্ট & রিপোর্ট ",
    path: "/user/account/myreports",
  },
  {
    icon: (
      <FiSettings className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "সেটিংস ",
     path: "/user/account/settings",
  },
  {
    icon: (
      <FiLogOut className="h-8 w-8 text-[12px] p-1 bg-gray-100 rounded-md " />
    ),
    title: "লগাউট ",
    path: "/",
  },
];

export { sidebarDetails };
