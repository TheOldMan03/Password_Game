import { createSlice } from "@reduxjs/toolkit";

export const isPaulDed=createSlice({
    name:"isPaulDed",

    initialState:{
        value:false
    },

    reducers:{
        paulDeath:(state)=>{
            state.value=false;
        }
    }
})


export const {paulDeath}=isPaulDed.actions;
export default isPaulDed.reducer;
