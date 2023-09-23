import { useState,useEffect } from 'react'
import './Condition.css'
import "./Captcha.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRefresh} from '@fortawesome/free-solid-svg-icons'

export const GenerateCaptcha=()=>{
  let x="abcdefghijklmnopqrstuvwxyz1234567890"
  let a=x[Math.floor(Math.random()*36)]
  let b=x[Math.floor(Math.random()*36)]
  let c=x[Math.floor(Math.random()*36)]
  let d=x[Math.floor(Math.random()*36)]
  let e=x[Math.floor(Math.random()*36)]

  let y=a+b+c+d+e
  return y
}


const Captcha = ({rulename,ruledesc,trueValue}) => {

  const [callFunc,setCallFunc]=useState(true)
  const [captchaString,setCaptchaString]=useState("")

    const fun=()=>{
      if(callFunc){
        let x=GenerateCaptcha()
        setCaptchaString(x)
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

export default Captcha
