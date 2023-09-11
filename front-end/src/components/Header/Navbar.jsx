/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { navData } from "./navigation_data";
import SubLinks from "./Sublinks.jsx";
import "../../assets/styles/nav-bar.css";

export default function NavBar() {
  const [filteredNavData, setFilteredNavData] = useState(navData);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const NavList = () => (
    <ul className="box-border border-none nav-list-ul py-3 pl-[10px] flex flex-col lg:flex-row  justify-evenly ">
      {filteredNavData.map((_navDataItem, _in) =>
        _navDataItem.subLinks ? (
          <SubLinks navItem={_navDataItem} key={_in} setOpenNav={setOpenNav} />
        ) : (
          <Typography
            key={_in}
            as="li"
            variant="small"
            color="white"
            className={`text-lg  font-semibold   ${
              _navDataItem.title === "Dashboard"
                ? "h-full py-[11px] px-[15px] w-[150px] bg-[#FFD66C] hover:bg-[#01503b] hover:text-[#fff] "
                : "nav-item-primary"
            } `}
          >
            <Link to={_navDataItem.path} onClick={() => setOpenNav(false)}>
              {_navDataItem.title}
            </Link>
          </Typography>
        )
      )}
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
      <MobileNav
        open={openNav}
        className={`mobile-nav ${openNav ? "mobile-nav-open" : ""}`}
      >
        <NavList />
        {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button> */}
      </MobileNav>
    </Navbar>
  );
}
