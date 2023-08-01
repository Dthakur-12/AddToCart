import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        Increment:(state,action)=>{
            state.counter++;
        },
        Decrement:(state,action)=>{
            state.counter--;
        }

    }
})

export default counterSlice.reducer;
export const {Increment,Decrement}=counterSlice.actions;

