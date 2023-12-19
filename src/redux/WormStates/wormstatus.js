import { createSlice } from "@reduxjs/toolkit";

export const wormStatus=createSlice({
    name:"wormStatus",

    initialState:{
        value:0
    },

    reducers:{
        ws_mode0:(state)=>{
            state.value=0;
        },

        ws_mode1:(state)=>{
            state.value=1;
        }
    }
})


export const {ws_mode0,ws_mode1}=wormStatus.actions;
export default wormStatus.reducer;