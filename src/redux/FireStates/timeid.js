import { createSlice } from "@reduxjs/toolkit";

export const TId=createSlice({
    name:"TimeId",

    initialState:{
        value:null
    },

    reducers:{
        setTID:(state,action)=>{
            state.value=action.payload;
        },

        resetTID:(state)=>{
            state.value=null;
        }
    }
})


export const {setTID,resetTID}=TId.actions;
export default TId.reducer;