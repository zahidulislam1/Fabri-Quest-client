import React from "react";
import { FaFirstOrder } from "react-icons/fa";
import { MdOutlineSpatialTracking } from "react-icons/md";
import MenuLinkItem from "./MenuLinkItem";

const BuyerMenu = () => {
  return (
    <>
      <MenuLinkItem icon={FaFirstOrder} label="My Orders" address="my-orders" />
      <MenuLinkItem
        icon={MdOutlineSpatialTracking}
        label="Track Order"
        address="track-order"
      />
    </>
  );
};

export default BuyerMenu;
