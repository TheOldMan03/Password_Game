import React,{useState,useEffect,useRef} from 'react'
import '../Condition/Condition.css'
import '../Translate/Translate.css'
import '../Captcha/Captcha.css'
import { useSelector } from 'react-redux'


const RiddleTimer = ({rulename,ruledesc,trueValue}) => {


    const [second,setSecond]=useState(10)
    const [minute,setMinute]=useState(1)
    const shouldRun=useSelector(state=>state.RTState.value)
    const timeID=useRef(null);
    
    const startTimer=()=>{

      let x;

      if(timeID.current===null && shouldRun){
        x=setInterval(()=>{
          if(second>0){
              setSecond(second-1)
          }
          else if(minute!==0){
              setSecond(59)
              setMinute(minute-1)
          }
        },1000)

        timeID.current=x
      }

    }

    useEffect(()=>{
      startTimer()

      return ()=>{
        if (timeID.current !== null) {
          clearInterval(timeID.current);
          timeID.current = null;
        }
      }

    },[second,minute,shouldRun])

    //so basically how this works is that the timer starts when the password does not contain the riddle
    //if the riddle is in the password then the timer stops but if in any instance the riddle does not exist in the password the timer will start again
    //if the minute is 0 then a gameover screen should be displayed and shud stop counting as well


  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="Capt">
            <div className="captcha_box" id="translate_box">
              {minute}:{second}
            </div>

        </div>

      </div>
    </div>
  )
}

export default RiddleTimer
