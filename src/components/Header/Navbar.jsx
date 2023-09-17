/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcLike, FcDislike, FcSettings, FcSupport } from "react-icons/fc";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { navData } from "./navigation_data";
import SubLinks from "./Sublinks.jsx";
import "../../assets/styles/nav-bar.css";
import UserContext from "../../contexts/UserContext";
import { FaUserLarge } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import { FaEdit, FaLongArrowAltUp, FaUserEdit } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import navLogo from "../../assets/icons/logo.png";

export default function NavBar() {
  const { user, userInfo, logOut } = useContext(UserContext);
  const [filteredNavData, setFilteredNavData] = useState(navData);
  const [isHovered, setIsHovered] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  // console.log(user);
  const handleIconHover = () => {
    setIsHovered(true);
    console.log("anis");
  };

  const handleIconLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logoutHandler = async () => {
    await logOut();
    navigate("/");
  };

  const mybioDataHandler = () => {
    navigate(`/user/account/preview-biodata/${userInfo?.data?.data[0]?.id}`);
  };

  const NavList = () => (
    <ul className="box-border border-none nav-list-ul py-3 pl-[10px] flex flex-col lg:flex-row  justify-between ">
      <div>
        <Link to="/">
          <img src={navLogo} alt="" />
        </Link>
      </div>
      <div>
        {filteredNavData.map((_navDataItem, _in) =>
          _navDataItem.subLinks ? (
            <SubLinks
              navItem={_navDataItem}
              key={_in}
              setOpenNav={setOpenNav}
            />
          ) : (
            <Typography
              key={_in}
              as="li"
              variant="small"
              color="white"
              className={`text-lg  font-semibold   ${
                _navDataItem.title === "Dashboard"
                  ? "h-full py-[11px] px-[15px] w-[120px] bg-[#FFD66C] hover:bg-[#01503b] hover:text-[#fff] "
                  : "nav-item-primary"
              } `}
            >
              <Link
                to={_navDataItem.path}
                className="rounded-lg"
                onClick={() => setOpenNav(false)}
              >
                {_navDataItem.title}
              </Link>
            </Typography>
          )
        )}
      </div>
      <div>
        {!user?.uid ? (
          <Typography
            as="li"
            variant="small"
            color="white"
            className="text-lg  font-semibold nav-item-primary"
          >
            <Link to="/login">লগইন</Link>
          </Typography>
        ) : (
          <Typography
            as="div"
            variant="small"
            color="white"
            className="text-lg mx-5 cursor-pointer relative font-semibold nav-item-primary"
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
          >
            <div>
              <FaUserLarge className="w-6 h-8" />
            </div>
            {isHovered && (
              <div
                className={`absolute ${
                  !isHovered ? "hidden" : "block"
                }  w-[250px] rounded-md profile-card mx-5 h-[450px] transition-all duration-300 ease-in p-4  bg-gradient-to-r from-[#071952] to-[#071952] top-12 right-[100px]  scrollbar-thumb-blue scrollbar-thumb-rounded-full scrollbar-track-blue-lighter scrollbar-w-2 translate-x-1/2 overflow-y-scroll overflow-x-hidden z-40`}
                id="profile-card"
              >
                <div className="text-center py-5">
                  <FaUserLarge className="w-10 h-10 mx-auto rounded-full border-2 border-white p-2" />
                  <h4 className="text-gray-500 py-2 font-bold">
                    Biodata Status
                  </h4>
                  <h6 className="text-gray-500  font-bold">Incomplete</h6>
                  <Button
                    onClick={mybioDataHandler}
                    className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl mt-2"
                  >
                    My Biodata
                  </Button>
                </div>
                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to={`/user/account/edit-biodata`}
                >
                  <FaEdit className="mr-2" />
                  <span>বায়োডাটা এডিট করুন</span>
                </Link>

                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to={`/user/account/dashboard`}
                >
                  <BiSolidDashboard className="mr-2" />
                  <span>ড্যাসবোর্ড</span>
                </Link>

                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to={`/user/account/likes`}
                >
                  <FcLike className="mr-2" />
                  <span>পছন্দের তালিকা </span>
                </Link>

                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to={`/user/account/dislikes`}
                >
                  <FcDislike className="mr-2" />
                  <span>অপছন্দের তালিকা </span>
                </Link>
                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to={`/user/account/settings`}
                >
                  <FcSettings className="mr-2" />
                  <span>সেটিংস </span>
                </Link>
                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to={`/user/account/reports`}
                >
                  <FcSupport className="mr-2" />
                  <span>সাপোর্ট এবং রিপোর্ট </span>
                </Link>
                <Link
                  className=" w-full flex items-center rounded-md transition-all duration-300 ease-in-out"
                  to="#!"
                  onClick={logoutHandler}
                >
                  <MdExitToApp className="mr-2" />
                  <span>লগ আউট</span>
                </Link>
              </div>
            )}
          </Typography>
        )}
      </div>
    </ul>
  );

  return (
    <Navbar className="  bg-gradient-to-r from-[#071952] to-[#071952]  rounded-none justify-between box-border styles.headerColor navigation-bar-custom sticky top-0 ">
      <div className=" hidden lg:block ">
        <NavList />
      </div>

      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit  focus:bg-transparent active:bg-transparent lg:hidden nav-toggle-button  "
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
      {/* </div> */}
      <Collapse
        open={openNav}
        className={`mobile-nav ${openNav ? "mobile-nav-open" : ""}`}
      >
        <NavList />
      </Collapse>
    </Navbar>
  );
}
