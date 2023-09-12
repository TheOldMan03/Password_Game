import {useState,createContext } from "react";

const [data,setData]=useState([
    {rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:"A function",curr:false,truth:false},
    {rule:"Rule 2",desc:"Your password must contain a number",execute:"A function",curr:false,truth:false},
    {rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:"A function",curr:false,truth:false},
    {rule:"Rule 4",desc:"The digits in your password must add upto 5",execute:"A function",curr:false,truth:false},
])

export const RuleInfo=createContext([data,setData]);
