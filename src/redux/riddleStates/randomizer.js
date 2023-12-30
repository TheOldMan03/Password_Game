import { createSlice } from "@reduxjs/toolkit";

export const RT_randomizer=createSlice({
    name:"RT_randomizer",

    initialState:{
        value:-1
    },

    reducers:{
       randomizer_RT:(state,action)=>{
           state.value=action.payload
       }
    }
})


export const {randomizer_RT}=RT_randomizer.actions;
export default RT_randomizer.reducer;