import React,{useState,useEffect,useRef} from 'react'
import '../Condition/Condition.css'
import '../Captcha/Captcha.css'
import './RT.css'
import { useDispatch, useSelector } from 'react-redux'
import { setRT_GameOver } from '../../redux/riddleStates/riddleGameOver'


const RiddleTimer = ({rulename,ruledesc,trueValue}) => {


  const [second,setSecond]=useState(0)
  const [minute,setMinute]=useState(1)
  const shouldRun=useSelector(state=>state.RTState.value)
  const randomVal=useSelector(state=>state.RTRandom.value)
  const timeID=useRef(null);

  const dispatch=useDispatch()

  const RiddleObj=[
    {q:"The more you take, the more you leave behind. What am I?",a:"footsteps"},
    {q:"What has a head and a tail, but no body?",a:"coin"},
    {q:"What has to be broken before you can use it?",a:"egg"},
    {q:"What gets wet while drying?",a:"towel"},
    {q:"What can you break, even if you never pick it up or touch it?",a:"promise"},
    {q:"What is so fragile, even saying its name can break it?",a:"silence"},
    {q:"What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",a:"river"},
    {q:"What has a neck but no head?",a:"bottle"},
    {q:"What goes up but never comes down?",a:"age"},
    {q:"What has keys but cant open locks?",a:"piano"},
    {q:"What has a face and two hands but no arms or legs?",a:"clock"},
    {q:"What has many teeth but cant bite?",a:"comb"},
    {q:"What has a thumb and four fingers but is not alive?",a:"glove"},
    {q:"What has a ring but no finger?",a:"phone"},
    {q:"What has a bottom at the top?",a:"legs"},
    {q:"What is always in front of you but cant be seen?",a:"future"}
  ]

  const startTimer=()=>{

    let x;

    if(timeID.current===null && shouldRun){
      x=setInterval(()=>{
        if(second>0){
            setSecond(second-1)
        }
        else if(minute!==0){
            setSecond(59)
            setMinute(minute-1)
        }

        else if(second===0 && minute===0){
          dispatch(setRT_GameOver())
        }

      },1000)

      timeID.current=x
    }

  }

  useEffect(()=>{
    startTimer()

    return ()=>{
      if (timeID.current !== null) {
        clearInterval(timeID.current);
        timeID.current = null;
      }
    }

  },[second,minute,shouldRun])

  //so basically how this works is that the timer starts when the password does not contain the riddle
  //if the riddle is in the password then the timer stops but if in any instance the riddle does not exist in the password the timer will start again
  //if the minute is 0 then a gameover screen should be displayed and shud stop counting as well


  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="Capt" id="Ques">

        <div className="captcha_box" id="Question">
              {RiddleObj[randomVal].q}
            </div>

            <div className="captcha_box" id="TimerBox">
              {minute}:{second}
            </div>

        </div>

      </div>
    </div>
  )
}

export default RiddleTimer
