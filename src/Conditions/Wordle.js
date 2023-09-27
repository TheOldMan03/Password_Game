import React,{useEffect} from 'react'
import axios from "axios";
import './Condition.css'

let Ans=""

const Wordle = ({rulename,ruledesc,trueValue}) => {

    useEffect(()=>{
        const currDate=new Date()
        const year=currDate.getFullYear()
        const month=currDate.getMonth()+1
        const day=currDate.getDate()


        const wordleURL="https://www.nytimes.com/svc/wordle/v2/"+year+"-"+month+"-"+day
        axios.get(wordleURL)
        .then((response)=>{
            console.log(response.data)
            setWordleAns(response.data)
        })
        
        .catch((error)=>{
            if(error.response){
                console.log("Something wrong with the server side")
            }

            else if(error.request){
                console.log("Connection made but no response")
                console.log(error.message)
            }

            else{
                console.log("Error",error.message);
            }
        })

    },[])//call this only on mount

  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>
      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>{ruledesc}</div>
    </div>
  )
}

export default Wordle

export const ReturnWordle=()=>{
    return Ans;
}   