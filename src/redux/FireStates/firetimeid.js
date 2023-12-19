import { createSlice } from "@reduxjs/toolkit";

export const FTID=createSlice({
    name:"FireTimeId",

    initialState:{
        value:null
    },

    reducers:{
        setFTID:(state,action)=>{
            state.value=action.payload;
        },

        resetFTID:(state)=>{
            state.value=null;
        }
    }
})


export const {setFTID,resetFTID}=FTID.actions;
export default FTID.reducer;