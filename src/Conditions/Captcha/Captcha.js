import { useState,useEffect } from 'react'
import '../Condition/Condition.css'
import "./Captcha.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRefresh} from '@fortawesome/free-solid-svg-icons'

const GenerateCaptcha=()=>{
  let x="abcdefghijklmnopqrstuvwxyz1234567890"
  let y=""
  
  for(let i=0;i<5;i++){
    y+=x[Math.floor(Math.random()*36)]
  }

  return y
}

let value=""

const Captcha = ({rulename,ruledesc,trueValue}) => {

  const [callFunc,setCallFunc]=useState(true)
  const [captchaString,setCaptchaString]=useState("")

  const fun=()=>{
    if(callFunc){
      let x=GenerateCaptcha()
      setCaptchaString(x)
      value=x
      setCallFunc(false)
    }
  }


  useEffect(fun,[callFunc])
      
  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="Capt">
            <div className="captcha_box">
              {captchaString}
            </div>

            <button className='rstCap' onClick={()=>setCallFunc(true)}>
              <FontAwesomeIcon icon={faRefresh}/>
            </button>


        </div>

      </div>
    </div>

  )
}

export const getCaptcha=()=>{
    return value
}


export default Captcha


