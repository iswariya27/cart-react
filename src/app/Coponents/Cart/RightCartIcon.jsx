import React from "react";
import "./RightCartIcon.css";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalCartItem } from "../../Features/Cart/CartSelector";

function RightCartIcon() {
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  return (
    <NavLink to={`/cart`} className="text-decoration-none">
      <div className="cart-icon">
        <div className="d-flex flex-column">
          <span>
            <HiShoppingCart />
          <sup>{totalItems}</sup>
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default RightCartIcon;
