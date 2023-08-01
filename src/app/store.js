import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/Counter/counterSlice";
import addtoCart from "../features/addtoCart";

export default configureStore({
reducer:{
    Counter:counterSlice,
    Cart:addtoCart
 }
})