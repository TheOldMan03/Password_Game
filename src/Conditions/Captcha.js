import React from 'react'
import './Condition.css'
import "./Captcha.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRefresh} from '@fortawesome/free-solid-svg-icons'


const Captcha = ({rulename,ruledesc,trueValue}) => {

    function GenerateCaptcha(){
        let x="abcdefghijklmnopqrstuvwxyz1234567890"
        let a=x[Math.floor(Math.random()*36)]
        let b=x[Math.floor(Math.random()*36)]
        let c=x[Math.floor(Math.random()*36)]
        let d=x[Math.floor(Math.random()*36)]
        let e=x[Math.floor(Math.random()*36)]
    
        let y=a+b+c+d+e
        return y
    }
    
  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="Capt">
            <div className="captcha_box">
                23hO28
            </div>

            <button className='rstCap' onClick={GenerateCaptcha}>
              <FontAwesomeIcon icon={faRefresh}/>
            </button>


        </div>

      </div>
    </div>

  )
}

export default Captcha
