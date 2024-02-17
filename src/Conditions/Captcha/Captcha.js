import { useState,useEffect } from 'react'
import '../Condition/Condition.css'
import "./Captcha.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRefresh} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { changeCaptcha } from '../../redux/CaptchaStates/CaptchaCode'
import store from '../../redux/store'

const GenerateCaptcha=()=>{
  let x="abcdefghijklmnopqrstuvwxyz1234567890"
  let y=""
  
  for(let i=0;i<5;i++){
    y+=x[Math.floor(Math.random()*36)]
  }

  const dispatch=store.dispatch
  dispatch(changeCaptcha(y));
}

const Captcha = ({rulename,ruledesc,trueValue}) => {

  const [callFunc,setCallFunc]=useState(true)
  const captchaString=useSelector(state=>state.CaptchaGenerator.value)

  const fun=()=>{
    if(callFunc){
      GenerateCaptcha()
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


