import { Link } from "react-router";
import logo from "/logo.png";
import { FaHome } from "react-icons/fa";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";

import avatarImg from "../../assets/placeholder.jpg";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [active, setActive] = useState("home");

  return (
    <div className="navbar shadow-sm md:px-12 bg-[#0b2b43] text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu bg-[#0b2b43] menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                onClick={() => setActive("home")}
                className={`flex items-center gap-0.5 ${
                  active === "home" ? "text-[#7bdcb5]" : "hover:text-[#7bdcb5]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-product"
                onClick={() => setActive("all-product")}
                className={` ${
                  active === "all-product"
                    ? "text-[#7bdcb5]"
                    : "hover:text-[#7bdcb5]"
                }`}
              >
                All Product
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setActive("dashboard")}
                  className={` ${
                    active === "dashboard"
                      ? "text-[#7bdcb5]"
                      : "hover:text-[#7bdcb5]"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                onClick={() => setActive("about")}
                className={` ${
                  active === "about" ? "text-[#7bdcb5]" : "hover:text-[#7bdcb5]"
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setActive("contact")}
                className={` ${
                  active === "contact"
                    ? "text-[#7bdcb5]"
                    : "hover:text-[#7bdcb5]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-1">
          <img className="w-11 bg-cover" src={logo} alt="" />
          <span className=" btn-ghost text-2xl font-bold">
            Fabri<span className="text-[#7bdcb5]">Quest</span>
          </span>
        </Link>
      </div>

      <div className=" space-x-4 navbar-end ">
        <ul className=" menu-horizontal space-x-4 font-medium  hidden lg:flex px-1">
          <li>
            <Link
              to="/"
              onClick={() => setActive("home")}
              className={`flex items-center gap-0.5 ${
                active === "home" ? "text-[#7bdcb5]" : "hover:text-[#7bdcb5]"
              }`}
            >
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/all-product"
              onClick={() => setActive("all-product")}
              className={` ${
                active === "all-product"
                  ? "text-[#7bdcb5]"
                  : "hover:text-[#7bdcb5]"
              }`}
            >
              All Product
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/dashboard"
                onClick={() => setActive("dashboard")}
                className={` ${
                  active === "dashboard"
                    ? "text-[#7bdcb5]"
                    : "hover:text-[#7bdcb5]"
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/about"
              onClick={() => setActive("about")}
              className={` ${
                active === "about" ? "text-[#7bdcb5]" : "hover:text-[#7bdcb5]"
              }`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setActive("contact")}
              className={` ${
                active === "contact" ? "text-[#7bdcb5]" : "hover:text-[#7bdcb5]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Dropdown Menu */}
        <div className="relative">
          <div className="flex flex-row items-center gap-3">
            <div className="hidden md:block">
              {/* Avatar */}
              <img
                className="rounded-full"
                referrerPolicy="no-referrer"
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt="profile"
                height="30"
                width="30"
              />
            </div>
          </div>
        </div>
        {user ? (
          <>
            <div
              onClick={logOut}
              className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-black   rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <IoLogOutOutline />
              Logout
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-[#0b2b43]   rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <IoLogInOutline />
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
