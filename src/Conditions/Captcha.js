import React from 'react'
import './Condition.css'
import "./Captcha.css"


const Captcha = ({rulename,ruledesc,trueValue,img}) => {
  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="Capt">
            <div className="captcha_box">
                23hO28
            </div>
        </div>

      </div>
    </div>

  )
}

export default Captcha
