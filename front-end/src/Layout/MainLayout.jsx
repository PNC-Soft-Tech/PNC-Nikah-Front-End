import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLaout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLaout;
