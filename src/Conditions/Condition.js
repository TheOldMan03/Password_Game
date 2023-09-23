import React from 'react'
import './Condition.css'


const Condition = ({rulename,ruledesc,trueValue}) => {
  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>
      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>{ruledesc}</div>
    </div>
  )
}

export default Condition
