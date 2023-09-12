import React from 'react'
import './Condition.css'


//the above is a template

//curr is a property which will display the component...only for the 1st Cbox curr will be activated based on some condition 
//After the 1st Cbox the value of curr is depends on the isNext property
//truth property changes the colour of the box to either red or green if it is wrong or correct resp.

const Condition = ({rulename,ruledesc,ruleFunc}) => {

  return (
    <div className='rule'>
      <div className="upperhalf">Rule 34</div>
      <div className="lowerhalf">Rule Statement</div>
    </div>
  )
}

export default Condition
