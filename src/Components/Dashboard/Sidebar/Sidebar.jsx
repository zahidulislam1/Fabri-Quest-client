import { useState } from "react";
import { Link } from "react-router";
import logo from "/logo.png";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

// User Menu

// import useRole from "../../../hooks/useRole";
// import LoadingSpinner from "../../Shared/LoadingSpinner";
import useAuth from "../../../Hooks/useAuth";
import MenuLinkItem from "./Menu/MenuLinkItem";
import ManagerMenu from "./Menu/ManagerMenu";
import AdminMenu from "./Menu/AdminMenu";
import BuyerMenu from "./Menu/BuyerMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  //   const [role, isRoleLoading] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  //   if (isRoleLoading) return <LoadingSpinner />;

  return (
    <>
      {/* Small Screen Navbar, only visible till md breakpoint */}
      <div className="bg-[#0b2b43] text-white  flex justify-between md:hidden">
        <div>
          <div className="block  cursor-pointer p-4 font-bold">
            <Link to="/" className="flex items-center gap-1">
              <img className="w-11 bg-cover" src={logo} alt="" />
              <span className=" btn-ghost text-2xl font-bold">
                Fabri<span className="text-[#7bdcb5]">Quest</span>
              </span>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#0b2b43] text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Top Content */}
          <div>
            {/* Logo */}
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#0b2b43] text-white mx-auto">
              <Link to="/" className="flex items-center gap-1">
                <img className="w-11 bg-cover" src={logo} alt="" />
                <span className=" btn-ghost text-2xl font-bold">
                  Fabri<span className="text-[#7bdcb5]">Quest</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Middle Content */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}
            <nav>
              {/* Common Menu
              <MenuLinkItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
              /> */}
              <BuyerMenu></BuyerMenu>
              <ManagerMenu></ManagerMenu>
              <AdminMenu></AdminMenu>
              {/* Role-Based Menu

              {role === "customer" && <CustomerMenu />}
              {role === "seller" && <SellerMenu />}
              {role === "admin" && <AdminMenu />} */}
            </nav>
          </div>

          {/* Bottom Content */}
          <div>
            <hr />

            <MenuLinkItem
              icon={FcSettings}
              label="My Profile"
              address="/dashboard/profile"
            />
            <button
              onClick={logOut}
              className="flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-white hover:bg-[#c4f0df]  hover:text-gray-700  transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
