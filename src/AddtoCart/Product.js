import React,{Fragment} from "react";
import logo from "../assets/logo.jpg";
import ProductItems from "./ProductItems";
import watch from "../assets/watch.jpg";
import phone from "../assets/phone.jpg";
import Iphone from "../assets/iphone.jpg";
import buds from "../assets/buds.jpg";
import monitor from "../assets/monitors.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const cartItem = useSelector((state) => state.Cart.cart);
  console.log(cartItem);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={logo} alt="logo" height={100} width={150} />
        <h4>
          {" "}
          <Link to="/checkout">cart:{cartItem.length}</Link>
        </h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <ProductItems id="1" title="watch" image={watch} />
        <ProductItems id="2" title="phone" image={phone} />
        <ProductItems id="3" title="Iphone" image={Iphone} />
        <ProductItems id="4" title="buds" image={buds} />
        <ProductItems id="5" title="Monitors" image={monitor} />
      </div>
    </>
  );
};

export default Product;
