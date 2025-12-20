import React from "react";
import { FaBorderAll, FaUserCog, FaUserTag } from "react-icons/fa";
import MenuLinkItem from "./MenuLinkItem";
import { IoMdDoneAll } from "react-icons/io";

const AdminMenu = () => {
  return (
    <>
      <MenuLinkItem
        icon={FaUserCog}
        label="Manage Users"
        address="manage-users"
      />
      <MenuLinkItem
        icon={FaBorderAll}
        label="All Products"
        address="all-products"
      />
      <MenuLinkItem
        icon={IoMdDoneAll}
        label="All Orders"
        address="all-orders"
      />
    </>
  );
};

export default AdminMenu;
