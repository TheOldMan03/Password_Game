import './App.css';
import { useState,useEffect} from 'react';

// import { CSSTransition,TransitionGroup } from 'react-transition-group';
import * as pwdCheck from './PasswordCheck'
import { HelloPaul,ParentFireFunction,WormCheck} from './SpecialConditions/index.js';
import { Captcha,Condition,Sponser,Translate,RiddleTimer,Colorcondition} from './Conditions/index.js';
import Gameover from './GameoverScreens/Gameover.js';

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
  const pauldeathStage=useSelector(state=>state.pdStages.value)
  const RTGameover=useSelector(state=>state.RTGameover.value)
  const dispatch=useDispatch();

  const [nextCount,setNextCount]=useState(0)
  
  const [displayFirstRule,setDFR]=useState(false);
  const [falseCount,setFalseCount]=useState(0);


  const [data,setData]=useState([
    {id:21,rule:"Rule 21",desc:"The password should include a prime number between 1 to 500",execute:pwdCheck.primenumcheck,curr:false,isNext:false,truth:false,WC:true},
    {id:20,rule:"Rule 20",desc:"Your password must include the length of your password",execute:pwdCheck.pwdlength,curr:false,isNext:false,truth:false,WC:true},
    {id:19,rule:"Rule 19",desc:"Your password must contain this color in hex",execute:pwdCheck.colorcode,curr:false,isNext:false,truth:false,WC:true},
    // {id:18,rule:"Rule 18",desc:"Your password must contain either of the following:I am Loved,I am worthy,I am enough ",execute:pwdCheck.affirmations,curr:false,isNext:false,truth:false,WC:true},
    {id:17,rule:"Rule 17",desc:"Your password must contain the answer to this riddle",execute:pwdCheck.Riddlemethis,curr:false,isNext:false,truth:false,WC:true},
    // {id:16,rule:"Rule 16",desc:"Looks like the warmth from the fire made Paul hatch....could you feed him not more than 5 🐛",execute:WormCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:15,rule:"Rule 15",desc:"A fire broke out and its spreading randomly...",execute:ParentFireFunction,curr:false,isNext:false,truth:false,WC:true},
    // {id:14,rule:"Rule 14",desc:"The password must contain the english Translation of the word in the box",execute:pwdCheck.LanguageBarrier,curr:false,isNext:false,truth:false,WC:true},
    // {id:13,rule:"Rule 13",desc:"The elements in your password must have atomic numbers that add to 200",execute:pwdCheck.PeriodicSum,curr:false,isNext:false,truth:false,WC:true},
    // {id:12,rule:"Rule 12",desc:"This is Paul 🥚,could you keep him safe?",execute:HelloPaul,curr:false,isNext:false,truth:false,WC:true},
    // {id:11,rule:"Rule 11",desc:"Your password must include a leap year",execute:pwdCheck.LeapYearCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:10,rule:"Rule 10",desc:"Your password must include a 2 letter symbol from the periodic table",execute:pwdCheck.Check2letterElem,curr:false,isNext:false,truth:false,WC:true},
    // {id:9,rule:"Rule 9",desc:"Your password must include this CAPTCHA",execute:pwdCheck.CaptchaCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:8,rule:"Rule 8",desc:"Your password must include our sponsors!",execute:pwdCheck.HasSponsors,curr:false,isNext:false,truth:false,WC:true},
    // {id:7,rule:"Rule 7",desc:"Your password must contain a roman numeral",execute:pwdCheck.HasRomanNumeral,curr:false,isNext:false,truth:false,WC:true},
    // {id:6,rule:"Rule 6",desc:"Your password must contain a month of the year",execute:pwdCheck.MonthofYear,curr:false,isNext:false,truth:false,WC:true},
    // {id:5,rule:"Rule 5",desc:"The digits in your password must add to 50",execute:pwdCheck.AddUptoFive,curr:false,isNext:false,truth:false,WC:true},
    // {id:4,rule:"Rule 4",desc:"Your password must include a special character",execute:pwdCheck.SpecialCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:pwdCheck.UpperCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:pwdCheck.NumberCheck,curr:false,isNext:false,truth:false,WC:true},
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

  
  
  const componentMap = {
    8: Sponser,
    9: Captcha,
    14: Translate,
    17: RiddleTimer,
    19: Colorcondition
    // Add more mappings as needed
  };

  const slainmsg="Paul has been slain"
  const underfedmsg="Paul has been underfed"
  const overfedmsg="Paul has been overfed"
  

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
          display.map(datax => {
            if (datax.curr) {
              const Component = componentMap[datax.id] || Condition
              return (
                <Component key={datax.id} rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth} />
              );
            }
            return null;
          })
        } 

        {isPaulDed && (
          <Gameover desc={() => {
            switch (pauldeathStage) {
              case 0:
                return slainmsg;
              case 1:
                return underfedmsg;
              case 2:
                return overfedmsg;
              default:
                return slainmsg; // Handle potential unexpected values
            }
          }}
          />
        )}

        {RTGameover && (<Gameover desc={()=>"You died!"}/>)}

        

      </div>

    </div>
    
  );
}

export default App;
