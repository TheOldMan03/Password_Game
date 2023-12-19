import { createSlice } from "@reduxjs/toolkit";

export const WFITD=createSlice({
    name:"WormFeedITD",

    initialState:{
        value:null
    },

    reducers:{
        setWFTID:(state,action)=>{
            state.value=action.payload;
        },

        resetWFTID:(state)=>{
            state.value=null;
        }
    }
})


export const {setWFTID,resetWFTID}=WFITD.actions;
export default WFITD.reducer;