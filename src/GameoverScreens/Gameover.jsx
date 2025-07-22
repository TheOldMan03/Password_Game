import React from 'react'
import "./Gameover.css"

const Gameover = ({desc}) => {

  const description = desc();


  return (
    <div className='GO'>
        <div className="gameover">
            {description}
        </div>
    </div>
  )
}

export default Gameover
