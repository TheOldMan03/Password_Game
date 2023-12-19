import { createSlice } from "@reduxjs/toolkit";

export const eggCState=createSlice({
    name:"EggCount",

    initialState:{
        value:0
    },

    reducers:{
        incEggCount:(state)=>{
            state.value+=1;
        },

        resetEggCount:(state)=>{
            state.value=0;
        }
    }
})


export const {incEggCount,resetEggCount}=eggCState.actions;
export default eggCState.reducer;