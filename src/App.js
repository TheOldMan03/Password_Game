import './App.css';
import { useState,useEffect} from 'react';
import Condition from './Conditions/Condition/Condition.js'
// import { CSSTransition,TransitionGroup } from 'react-transition-group';
import * as pwdCheck from './PasswordCheck'
import {HelloPaul}  from './SpecialConditions/HelloPaul.js';
import Sponsor from './Conditions/Sponser/Sponser.js';
import Captcha from './Conditions/Captcha/Captcha.js';
import Gameover from './Gameover';
import Translate from './Conditions/Translate/Translate.js';
import {ParentFireFunction} from './SpecialConditions/FireFunction.js';
import {WormCheck} from './SpecialConditions/FeedPaul.js';
import { setPwd } from './redux/MainStates/passwordstate.js';
import { setWC } from './redux/MainStates/wordcountstate.js';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const password=useSelector(state=>state.pwd.value)
  const wordCount=useSelector(state=>state.wc.value)
  const fireStatus=useSelector(state=>state.fireStatus.value)
  const pS=useSelector(state=>state.paulStage.value)
  const wormStatus=useSelector(state=>state.ws.value)
  const isPaulDed=useSelector(state=>state.paulDed.value)
  const dispatch=useDispatch();

  const [nextCount,setNextCount]=useState(0)
  
  const [displayFirstRule,setDFR]=useState(false);
  const [falseCount,setFalseCount]=useState(0);


  const [data,setData]=useState([
    {id:16,rule:"Rule 16",desc:"Ah looks like Paul has hatched...Could you feed him 🐛?",execute:WormCheck,curr:false,isNext:false,truth:false,WC:true},
    {id:15,rule:"Rule 15",desc:"Oh no, the password caught on fire 🔥....Quick douse it!",execute:ParentFireFunction,curr:false,isNext:false,truth:false,WC:true},
    // {id:14,rule:"Rule 14",desc:"The password must contain the english Translation of the word in the box",execute:pwdCheck.LanguageBarrier,curr:false,isNext:false,truth:false,WC:true},
    // {id:13,rule:"Rule 13",desc:"The elements in your password must have atomic numbers that add up to 200",execute:pwdCheck.PeriodicSum,curr:false,isNext:false,truth:false,WC:true},
    {id:12,rule:"Rule 12",desc:"This is my chicken Paul 🥚, he hasn't hatched yet, Please put him in your password and keep him safe",execute:HelloPaul,curr:false,isNext:false,truth:false,WC:true},
    // {id:11,rule:"Rule 11",desc:"Your password must include a leap year",execute:pwdCheck.LeapYearCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:10,rule:"Rule 10",desc:"Your password must include a 2 letter symbol from the periodic table",execute:pwdCheck.Check2letterElem,curr:false,isNext:false,truth:false,WC:true},
    // {id:9,rule:"Rule 9",desc:"Your password must include this CAPTCHA",execute:pwdCheck.CaptchaCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:8,rule:"Rule 8",desc:"Your password must include our sponsors!",execute:pwdCheck.HasSponsors,curr:false,isNext:false,truth:false,WC:true},
    // {id:7,rule:"Rule 7",desc:"Your password must contain a roman numeral",execute:pwdCheck.HasRomanNumeral,curr:false,isNext:false,truth:false,WC:true},
    // {id:6,rule:"Rule 6",desc:"Your password must contain a month of the year",execute:pwdCheck.MonthofYear,curr:false,isNext:false,truth:false,WC:true},
    // {id:5,rule:"Rule 5",desc:"The digits in your password must add upto 25",execute:pwdCheck.AddUptoFive,curr:false,isNext:false,truth:false,WC:true},
    // {id:4,rule:"Rule 4",desc:"Your password must include a special character",execute:pwdCheck.SpecialCheck,curr:false,isNext:false,truth:false,WC:true},
    {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:pwdCheck.UpperCheck,curr:false,isNext:false,truth:false,WC:true},
    {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:pwdCheck.NumberCheck,curr:false,isNext:false,truth:false,WC:true},
    {id:1,rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:pwdCheck.CountCheck,curr:false,isNext:false,truth:false,WC:true}
  ])

 
  const [display,setDisplay]=useState([])


  const ChangeRule=()=>{
    let newData=[];
    let fData=[];
    let tData=[];
    let WrongCount=falseCount;


    const UpdateRule=(Truth,newObj)=>{
      if(!newObj.curr){
        newObj.curr=true;
      }
  
      if(newObj.execute(Truth?wordCount:password)){
        newObj.truth=true;
  
        if(WrongCount>0 && !newObj.WC){
          WrongCount--
          newObj.WC=true;
        }
  
        if(!newObj.isNext && WrongCount===0){
          newObj.isNext=true;
          setNextCount(nextCount+1)
        }
  
        tData.push(newObj)
      }
  
      else{
        if(newObj.WC){
          WrongCount++;
          newObj.WC=false
        }
  
        newObj.truth=false;
        fData.push(newObj)
      }
    }
  
    newData=data.map((datax,index)=>{
      const newObj={...datax}
      if(datax.id===1 && (wordCount > 0 || displayFirstRule)){//only for the last element
      
        if(!displayFirstRule){
          setDFR(true)
        }

        UpdateRule(true,newObj);
        
      }
      

      else{

        if(datax.id!==1 && data[index+1].isNext){
          UpdateRule(false,newObj);
        }
      }

      return newObj;
    })

    const combined=[...fData,...tData]
    setDisplay(combined)
    setData(newData)
    setFalseCount(WrongCount);
  }

  useEffect(ChangeRule,[password,nextCount,fireStatus,pS,falseCount,wormStatus]);
  
  function ResizeArea(e){
    e.target.style.height="64px"
    e.target.style.height=(e.target.scrollHeight)+"px"
  }

  function PasswordLength(e){
    dispatch(setPwd(e.target.value))
    WordSize(e)
  }
  
  
  function WordSize(e){
    dispatch(setWC(e.target.value.length))
  }

  return (
    
    <div className="App">
      
      <div className="main">

        <div className="text">
          <h2>*</h2> 
          The Password Game
        </div>

        <div className="input">
          <div> 
            <span>Please Choose a password</span>
          </div>
          
          <div id="text">
            <textarea 
              className='pwdinput' 
              value={password} 
              onChange={PasswordLength}
              onInput={ResizeArea}
              spellCheck="false"
            >
            </textarea>

            <span id="wcount">{wordCount}</span>
          </div>
          

        </div>


         {
          display.map(datax=>{
              if(datax.curr){

                if(datax.id===8){
                  return(
                    <Sponsor key={datax.id} rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>
                  )
                }

                else if(datax.id===9){
                  return(
                    <Captcha key={datax.id} rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>
                  )
                }

                else if(datax.id===14){
                  return(
                    <Translate key={datax.id} rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>
                  )
                }

                else{
                  return(
                    <Condition key={datax.id} rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>
                  )
                }
              }

              return null
          })
        } 

      {/* {isPaulDed?<Gameover/>:null}  */}

      </div>

    </div>
    
  );
}

export default App;
