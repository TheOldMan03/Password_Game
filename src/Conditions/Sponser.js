import React from 'react'
import pepsi from "./images/pepsi_icon.png"
import starbucks from "./images/starbucks.png"
import shell from "./images/shell.png"
import './Condition.css'
import "./Sponser.css"


const Sponsor = ({rulename,ruledesc,trueValue}) => {
  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="sponsor">
            <img src={pepsi} alt="" className="logo" id="pepsi" />
            <img src={starbucks} alt="" className="logo" id="star" />
            <img src={shell} alt="" className="logo" id="shell"/>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
