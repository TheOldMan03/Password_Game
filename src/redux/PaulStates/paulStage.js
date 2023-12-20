import { createSlice } from "@reduxjs/toolkit";

export const paulStage=createSlice({
    name:"paulStage",

    initialState:{
        value:0
    },

    reducers:{
        intermediateStage:(state)=>{
            state.value=1;
        },

        setStage:(state)=>{
            state.value=2;
        }
    }
})


export const {setStage,intermediateStage}=paulStage.actions;
export default paulStage.reducer;