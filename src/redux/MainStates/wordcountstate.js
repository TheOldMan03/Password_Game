import { createSlice } from "@reduxjs/toolkit";

export const wordCountState=createSlice({
    name:"wordcount",

    initialState:{
        value:0
    },

    reducers:{
        setWC:(state,action)=>{
            state.value=action.payload;
        }
    }
})


export const {setWC}=wordCountState.actions;
export default wordCountState.reducer;