import { createSlice } from "@reduxjs/toolkit";

export const paulStage=createSlice({
    name:"paulStage",

    initialState:{
        value:0
    },

    reducers:{
        setStage:(state)=>{
            state.value=1;
        }
    }
})


export const {setStage}=paulStage.actions;
export default paulStage.reducer;