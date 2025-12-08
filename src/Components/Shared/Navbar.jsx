import { Link } from "react-router";
import logo from "/logo.png";
import { FaHome } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
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
              <Link to="/" className="hover:text-[#7bdcb5]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-product" className="hover:text-[#7bdcb5]">
                All Product
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#7bdcb5]">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#7bdcb5]">
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
              className="hover:text-[#7bdcb5] flex items-center gap-0.5"
            >
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-product" className="hover:text-[#7bdcb5]">
              All Product
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#7bdcb5]">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#7bdcb5]">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="/login"
          className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-black  px-6 py-3 rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <IoLogInOutline />
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
