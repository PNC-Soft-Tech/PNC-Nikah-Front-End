import { Outlet } from "react-router-dom";

import UserSidebar from "../components/UserSiderbar/UserSidebar";
const UserLayout = () => {
  return (
    <div className="flex flex-row">
      <UserSidebar />
      <div className="min-h-screen w-[78%] bg-gray-100 px-5  pt-2 pb-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
