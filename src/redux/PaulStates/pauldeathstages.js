import { createSlice } from "@reduxjs/toolkit";

export const pauldeathStages=createSlice({
    name:"pauldeathstages",

    initialState:{
        value:-1
    },

    reducers:{
       paulhasbeenslain:(state)=>{
           state.value=0;
       },

       underfed:(state)=>{
           state.value=1;
       },

       overfed:status=>{
           status.value=2;
       }
    }
})


export const {paulhasbeenslain,underfed,overfed}=pauldeathStages.actions;
export default pauldeathStages.reducer;