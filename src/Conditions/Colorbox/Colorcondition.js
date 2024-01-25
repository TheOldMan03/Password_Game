import React,{useEffect,useState} from 'react'
import "../Condition/Condition.css"
import "../Captcha/Captcha.css"
import "./Colorcondition.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRefresh} from '@fortawesome/free-solid-svg-icons'


function RNGColour(){
  let R=Math.floor(Math.random()*255)
  let G=Math.floor(Math.random()*255)
  let B=Math.floor(Math.random()*255)

  return [R,G,B]
}

let val="-1"
let x

function Colorconditon({rulename,ruledesc,trueValue}) {

  const [callFunc,setCallFunc]=useState(true)
  const [hexcolor,sethexcolor]=useState("")
  const [bgcolor,setbgcolor]=useState([255,255,255])

  
  const fun=()=>{
    if(callFunc){
      x=RNGColour()

      let red=x[0].toString(16).toUpperCase()
      red=red.padStart(2,'0')

      let green=x[1].toString(16).toUpperCase()
      green=green.padStart(2,'0')

      let blue=x[2].toString(16).toUpperCase()
      blue=blue.padStart(2,'0')

      setbgcolor([x[0],x[1],x[2]]);

      let rgbString=red+green+blue
      sethexcolor(rgbString)
      console.log(rgbString)
      setCallFunc(false)

      val=rgbString
    }
  }

  useEffect(fun,[callFunc])

  return (
    <div className='rule'>
        <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>
        <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
            {ruledesc}

        <div className="Capt">
            <div className="captcha_box" style={{backgroundColor:`rgb(${bgcolor[0]},${bgcolor[1]},${bgcolor[2]})`}}>
                
            </div>

            <button className='rstCap' onClick={()=>setCallFunc(true)}>
                <FontAwesomeIcon icon={faRefresh}/>
            </button>

        </div>

        </div>
    </div>

  )
}

export const gethexColor=()=>{
  return val
}

export default Colorconditon
