import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../features/StudentSlice";
import ApiSlice from "../features/ApiSlice";
// import counterSlice from "../features/Counter/counterSlice";
// import addtoCart from "../features/addtoCart";

export default configureStore({
reducer:{
    Student:StudentSlice,
    Comments:ApiSlice
    // Counter:counterSlice,
    // Cart:addtoCart
 }
})