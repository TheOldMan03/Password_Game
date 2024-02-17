import { createSlice } from "@reduxjs/toolkit";

export const captchaCode=createSlice({
    name:"Captcha",

    initialState:{
        value:""
    },

    reducers:{
        changeCaptcha:(state,action)=>{
            state.value=action.payload
        }
    }
})


export const {changeCaptcha}=captchaCode.actions;
export default captchaCode.reducer;