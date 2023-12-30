import { createSlice } from "@reduxjs/toolkit";

export const RT_State=createSlice({
    name:"shouldRun",

    initialState:{
        value:true
    },

    reducers:{
       setRTimer:(state)=>{
           state.value=true
       },
       
       resetRTimer:(state)=>{
           state.value=false
       }
    }
})


export const {setRTimer,resetRTimer}=RT_State.actions;
export default RT_State.reducer;