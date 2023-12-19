import { createSlice } from "@reduxjs/toolkit";

export const PaulBelly=createSlice({
    name:"PaulBelly",

    initialState:{
        value:0
    },

    reducers:{
        incPB:(state)=>{
            state.value++;
        },

        resetPB:(state)=>{
            state.value=0;
        }
    }
})


export const {incPB,resetPB}=PaulBelly.actions;
export default PaulBelly.reducer;