import React from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import MenuLinkItem from "./MenuLinkItem";
import { AiOutlineProduct } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { FcApproval } from "react-icons/fc";

const ManagerMenu = () => {
  return (
    <>
      <MenuLinkItem
        icon={BsFillHouseAddFill}
        label="Add Product"
        address="add-product"
      />
      <MenuLinkItem
        icon={AiOutlineProduct}
        label="Manage Products"
        address="manage-products"
      />
      <MenuLinkItem
        icon={MdPendingActions}
        label="Pending Orders"
        address="pending-orders"
      />
      <MenuLinkItem
        icon={FcApproval}
        label="Approve Orders"
        address="approve-orders"
      />
    </>
  );
};

export default ManagerMenu;
