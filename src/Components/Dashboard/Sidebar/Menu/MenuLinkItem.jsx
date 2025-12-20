import React from "react";
import { NavLink } from "react-router";

const MenuLinkItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#c4f0df]  hover:text-gray-700 ${
          isActive ? "bg-[#c4f0df]  text-gray-700" : "text-white"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuLinkItem;
