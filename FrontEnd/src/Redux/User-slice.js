import { createSlice } from "@reduxjs/toolkit";

const IfUser=createSlice({
name:"ifUser",
initialState:false,
reducers:{
    Check: (state) => {
        return true; // Set state to true
    },
    Reset: (state) => {
        return false; // Optional: Reset state to false
    },
}
})
export const { Check , Reset  } =IfUser.actions;
export default IfUser.reducer;