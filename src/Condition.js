import React from 'react'
import './Condition.css'


//the above is a template

//curr is a property which will display the component...only for the 1st Cbox curr will be activated based on some condition 
//After the 1st Cbox the value of curr is depends on the isNext property
//truth property changes the colour of the box to either red or green if it is wrong or correct resp.

const Condition = ({rulename,ruledesc,trueValue}) => {
  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>
      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>{ruledesc}</div>
    </div>
  )
}

export default Condition
