import { createSlice } from "@reduxjs/toolkit";

export const fS_State=createSlice({
    name:"FireStatus",

    initialState:{
        value:0
    },

    reducers:{
        fs_mode0:(state)=>{
            state.value=0;
        },

        fs_mode1:(state)=>{
            state.value=1;
        },

        fs_mode3:(state)=>{
            state.value=3;
        }
    }
})


export const {fs_mode0,fs_mode1,fs_mode3}=fS_State.actions;
export default fS_State.reducer;