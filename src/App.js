import './App.css';
import { useState,useEffect,useRef } from 'react';
import Condition from './Conditions/Condition'
// import { CSSTransition,TransitionGroup } from 'react-transition-group';

import * as pwdCheck from './PasswordCheck'
import Sponsor from './Conditions/Sponser';
import Captcha from './Conditions/Captcha';
import Gameover from './Gameover';
import Translate from './Conditions/Translate';

function App() {

  const [password,setPassword]=useState('')
  const [wordCount,setWordCount]=useState(0)
  const [nextCount,setNextCount]=useState(0)
  
  const [displayFirstRule,setDFR]=useState(false);
  const falseCount=useRef(0);

  const [isPaulDed,setisPaulDed]=useState(false)
  const [paulStage,setPaulStage]=useState(0)

  const canPaulbekilled=useRef(false);
  const TimeId=useRef(null);
  const fireTimeId=useRef(null)

  const eggCount=useRef(0);

  const [fireStatus,setFireStatus]=useState(0)
  const fs=useRef(fireStatus);
  //0 means random character will be converted to a fire emoji
  //1 means the function shud check whether a fire emoji exists
  //3 means always return true and never execute the other 2 functions.... as its job is done

  const stateRef_paulded=useRef();
  stateRef_paulded.current=isPaulDed
  
  const HelloPaul=(pwd)=>{

    if(paulStage===0){
        if(pwd.includes("🥚")){
            if(!canPaulbekilled.current){
              canPaulbekilled.current=true
              //this means that Paul is susceptible to dying 
              //if he is ever removed from the pwd then the game is over
            }

            return true
        }

        else if(!pwd.includes("🥚") && canPaulbekilled.current){
          setisPaulDed(true)
          return false
          //paul is dead
        }
    }

    else{
        if(pwd.includes("🐔")){
            return true
        }

        else if(!pwd.includes("🐔") && canPaulbekilled.current){
          setisPaulDed(true)
          return false
        }
    }


    return false

  }

 

  const [data,setData]=useState([
    {id:15,rule:"Rule 15",desc:"Oh no, the password caught on fire 🔥....Quick douse it!",execute:ParentFireFunction,curr:false,isNext:false,truth:false,WC:true},
    // {id:14,rule:"Rule 14",desc:"The password must contain the english Translation of the word in the box",execute:pwdCheck.LanguageBarrier,curr:false,isNext:false,truth:false,WC:true},
    // // {id:13,rule:"Rule 13",desc:"The elements in your password must have atomic numbers that add up to 200",execute:pwdCheck.PeriodicSum,curr:false,isNext:false,truth:false,WC:true},
    // {id:12,rule:"Rule 12",desc:"This is my chicken Paul 🥚, he hasn't hatched yet, Please put him in your password and keep him safe",execute:HelloPaul,curr:false,isNext:false,truth:false,WC:true},
    // // {id:11,rule:"Rule 11",desc:"Your password must include a leap year",execute:pwdCheck.LeapYearCheck,curr:false,isNext:false,truth:false,WC:true},
    // // {id:10,rule:"Rule 10",desc:"Your password must include a 2 letter symbol from the periodic table",execute:pwdCheck.Check2letterElem,curr:false,isNext:false,truth:false,WC:true},
    // // {id:9,rule:"Rule 9",desc:"Your password must include this CAPTCHA",execute:pwdCheck.CaptchaCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:8,rule:"Rule 8",desc:"Your password must include our sponsors!",execute:pwdCheck.HasSponsors,curr:false,isNext:false,truth:false,WC:true},
    // {id:7,rule:"Rule 7",desc:"Your password must contain a roman numeral",execute:pwdCheck.HasRomanNumeral,curr:false,isNext:false,truth:false,WC:true},
    // {id:6,rule:"Rule 6",desc:"Your password must contain a month of the year",execute:pwdCheck.MonthofYear,curr:false,isNext:false,truth:false,WC:true},
    // {id:5,rule:"Rule 5",desc:"The digits in your password must add upto 25",execute:pwdCheck.AddUptoFive,curr:false,isNext:false,truth:false,WC:true},
    // {id:4,rule:"Rule 4",desc:"Your password must include a special character",execute:pwdCheck.SpecialCheck,curr:false,isNext:false,truth:false,WC:true},
    // {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:pwdCheck.UpperCheck,curr:false,isNext:false,truth:false,WC:true},
    {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:pwdCheck.NumberCheck,curr:false,isNext:false,truth:false,WC:true},
    {id:1,rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:pwdCheck.CountCheck,curr:false,isNext:false,truth:false,WC:true}
  ])

  


  function ParentFireFunction(pwd){

    if(fs.current===0){

      if(fireTimeId.current){
        clearTimeout(fireTimeId.current);
      }

      fireTimeId.current=setTimeout(()=>{
        addFire(pwd)
        console.log("Fire Added")
      },2000);
    }

    else if(fs.current===1){

      if(TimeId.current){
        clearTimeout(TimeId);
      }

      if(!pwd.includes("🔥")){
        setFireStatus(3);
        clearTimeout(TimeId.current);
        TimeId.current=null;
        return true;
      }

      else{

        TimeId.current=setTimeout(()=>{
          setFireStatus(0)
          console.log("User ka time khatam")
        },3500);

        return false;
      }
    }

    else if(fs.current===3 && pwd.includes("🔥")){
      setFireStatus(0);
    }

    else {
      return true;
    }

    return false;
  }

  const addFire=(pwd)=>{

    if(eggCount.current>=pwd.length){
      setFireStatus(1);
      return;
    }

    let RandomIndex=Math.floor(Math.random()*pwd.length);

    if(pwd[RandomIndex]==="🥚" && eggCount.current<4){
      while(pwd[RandomIndex]==="🥚"){
        RandomIndex=Math.floor(Math.random()*pwd.length);
      }
    }

    const newPassword=pwd.substring(0,RandomIndex)+"🔥"+pwd.substring(RandomIndex+1);
    setPassword(newPassword);
    setNextCount(nextCount+1);
    setFireStatus(1);
    eggCount.current+=1;
  }

  const [display,setDisplay]=useState([])
  
  const ChangeRule=()=>{
    let newData=[];
    let fData=[];
    let tData=[];
    let WrongCount=falseCount.current;

    newData=data.map((datax,index)=>{
      const newObj={...datax}
      if(datax.id===1){//only for the last element
        if(wordCount>0 || displayFirstRule){
          
          if(!displayFirstRule){
            setDFR(true)
          }

          if(!newObj.curr){
            newObj.curr=true;
          }

          if(newObj.execute(wordCount)){
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
      }

      else{
        if(data[index+1].isNext){

          if(!newObj.curr){
            newObj.curr=true;
          }

          if(newObj.execute(password)){
            newObj.truth=true;
            
            if(WrongCount>0 && !newObj.WC){
              WrongCount--
              newObj.WC=true;
            }

            if(!newObj.isNext && WrongCount===0){
              newObj.isNext=true;
              setNextCount(nextCount+1);
            }

            tData.push(newObj)
          }

          else{
            
            if(newObj.WC){
              WrongCount++;
              newObj.WC=false;
            }

            newObj.truth=false;
            fData.push(newObj)
          }
        }
      }

      return newObj;
    })

    const combined=[...fData,...tData]
    setDisplay(combined)
    setData(newData)
    falseCount.current=WrongCount;
  }


  useEffect(ChangeRule,[password,nextCount,fireStatus.current]);
  
  function ResizeArea(e){
    e.target.style.height="64px"
    e.target.style.height=(e.target.scrollHeight)+"px"
  }

  function PasswordLength(e){
    setPassword(e.target.value);
    WordSize(e)
  }
  
  
  function WordSize(e){
    setWordCount(e.target.value.length)
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

      {isPaulDed?<Gameover/>:null}

      </div>

    </div>
    
  );
}

export default App;

