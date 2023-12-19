import { createSlice } from "@reduxjs/toolkit";

export const passwordState=createSlice({
    name:"password",

    initialState:{
        value:""
    },

    reducers:{
        setPwd:(state,action)=>{
            state.value=action.payload;
        }
    }
})


export const {setPwd}=passwordState.actions;
export default passwordState.reducer;