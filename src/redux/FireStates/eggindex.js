import { createSlice } from "@reduxjs/toolkit";

export const eggIndexState=createSlice({
    name:"EggIndex",

    initialState:{
        value:-1
    },

    reducers:{
        setEIVal:(state,action)=>{
            state.value=action.payload;
        }
    }
})


export const {setEIVal}=eggIndexState.actions;
export default eggIndexState.reducer;