import { createSlice } from "@reduxjs/toolkit";

export const WHITD=createSlice({
    name:"WormHungryTID",

    initialState:{
        value:null
    },

    reducers:{
        setWHTID:(state,action)=>{
            state.value=action.payload;
        },

        resetWHTID:(state)=>{
            state.value=null;
        }
    }
})


export const {setWHTID,resetWHTID}=WHITD.actions;
export default WHITD.reducer;