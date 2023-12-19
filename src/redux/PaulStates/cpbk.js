import { createSlice } from "@reduxjs/toolkit";

export const cpbk=createSlice({
    name:"canPaulbekilled",

    initialState:{
        value:false
    },

    reducers:{
        killable:(state)=>{
            state.value=true;
        }
    }
})


export const {killable}=cpbk.actions;
export default cpbk.reducer;