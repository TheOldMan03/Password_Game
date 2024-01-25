import { createSlice } from "@reduxjs/toolkit";

export const RT_Gameover=createSlice({
    name:"Riddle_GameOver",

    initialState:{
        value:false
    },

    reducers:{
       setRT_GameOver:(state)=>{
           state.value=true
       }
    }
})


export const {setRT_GameOver}=RT_Gameover.actions;
export default RT_Gameover.reducer;