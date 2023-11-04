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
  const [displayFirstRule,setDFR]=useState(false)

  const [isPaulDed,setisPaulDed]=useState(false)
  const [canPaulbekilled,setCanPaulbekilled]=useState(false)

  const [fireIgnition,setFireIgnition]=useState(true)
  //this state is used for the FireIn function where if it is true then it will automatically return
  //true and not check anything

  const stateRef_paulded=useRef();
  const stateRef_canPauldie=useRef();

  stateRef_paulded.current=isPaulDed
  stateRef_canPauldie.current=canPaulbekilled

  const HelloPaul=(pwd,stage)=>{

    if(stage===0){
        if(pwd.includes("🥚")){
            if(!stateRef_canPauldie.current){
              setCanPaulbekilled(true)
              //this means that Paul is susceptible to dying 
              //if he is ever removed from the pwd then the game is over
            }

            return true
        }

        else if(!pwd.includes("🥚") && stateRef_canPauldie.current){
          setisPaulDed(true)
          return false
          //paul is dead
        }
    }

    else{
        if(pwd.includes("🐔")){
            return true
        }

        else if(!pwd.includes("🐔") && stateRef_canPauldie.current){
          setisPaulDed(true)
          return false
        }
    }


    return false

  }

  const fireIn=(pwd)=>{

    if(pwd.includes('🔥') && !fireIgnition){
      setFireIgnition(true)
    }

    if(fireIgnition){
      let eggIndex=-1;
      for(let i=0;i<pwd.length;i++){
        if(pwd[i]==="🥚"){
          eggIndex=i;
          break;
        }
      }

      if(eggIndex!=-1){

      }
    }


  }


  const [data,setData]=useState([
    {id:14,rule:"Rule 14",desc:"The password must contain the english Translation of the word in the box",execute:pwdCheck.LanguageBarrier,curr:false,isNext:false,truth:false},
    // {id:13,rule:"Rule 13",desc:"The elements in your password must have atomic numbers that add up to 200",execute:pwdCheck.PeriodicSum,curr:false,isNext:false,truth:false},
    {id:12,rule:"Rule 12",desc:"This is my chicken Paul 🥚, he hasn't hatched yet, Please put him in your password and keep him safe",execute:HelloPaul,curr:false,isNext:false,truth:false},
    // {id:11,rule:"Rule 11",desc:"Your password must include a leap year",execute:pwdCheck.LeapYearCheck,curr:false,isNext:false,truth:false},
    // {id:10,rule:"Rule 10",desc:"Your password must include a 2 letter symbol from the periodic table",execute:pwdCheck.Check2letterElem,curr:false,isNext:false,truth:false},
    // {id:9,rule:"Rule 9",desc:"Your password must include this CAPTCHA",execute:pwdCheck.CaptchaCheck,curr:false,isNext:false,truth:false},t
    // {id:8,rule:"Rule 8",desc:"Your password must include our sponsors!",execute:pwdCheck.HasSponsors,curr:false,isNext:false,truth:false},
    // {id:7,rule:"Rule 7",desc:"Your password must contain a roman numeral",execute:pwdCheck.HasRomanNumeral,curr:false,isNext:false,truth:false},
    // {id:6,rule:"Rule 6",desc:"Your password must contain a month of the year",execute:pwdCheck.MonthofYear,curr:false,isNext:false,truth:false},
    {id:5,rule:"Rule 5",desc:"The digits in your password must add upto 25",execute:pwdCheck.AddUptoFive,curr:false,isNext:false,truth:false},
    {id:4,rule:"Rule 4",desc:"Your password must include a special character",execute:pwdCheck.SpecialCheck,curr:false,isNext:false,truth:false},
    {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:pwdCheck.UpperCheck,curr:false,isNext:false,truth:false},
    {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:pwdCheck.NumberCheck,curr:false,isNext:false,truth:false},
    {id:1,rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:pwdCheck.CountCheck,curr:false,isNext:false,truth:false}
  ])

  const [display,setDisplay]=useState([])
  
  const ChangeRule=()=>{
    let newData=[];
    let fData=[];
    let tData=[];
    let WrongCount=0;

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

            if(WrongCount>0){
              WrongCount--
            }

            console.log(WrongCount)

            if(!newObj.isNext && WrongCount===0){
              newObj.isNext=true;
            }

            tData.push(newObj)
          }

          else{
            WrongCount++
            newObj.truth=false;
            fData.push(newObj)
            console.log(WrongCount)
          }
        }
      }

      else{
        if(data[index+1].isNext){

          if(!newObj.curr){
            newObj.curr=true;
          }

          if(newObj.id===12){
            if(newObj.execute(password,0)){
              newObj.truth=true;
              
              if(WrongCount>0){
                WrongCount--
              }

              if(!newObj.isNext && WrongCount==0){
                newObj.isNext=true
                setNextCount(nextCount+1)
              }

              tData.push(newObj)
            }

            else{         
              WrongCount++     
              newObj.truth=false;
              fData.push(newObj)
            }
          }

          else{
            if(newObj.execute(password)){
              newObj.truth=true;
              
              if(WrongCount>0){
                WrongCount--
              }

              if(!newObj.isNext && WrongCount==0){
                newObj.isNext=true;
                setNextCount(nextCount+1);
              }

              tData.push(newObj)
            }
  
            else{
              WrongCount++
              newObj.truth=false;
              fData.push(newObj)
            }
          }
        }
      }

      return newObj;
    })

    const combined=[...fData,...tData]
    setDisplay(combined)
    setData(newData)
  }


  useEffect(ChangeRule,[password,wordCount,nextCount]);
  
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


      </div>

      {isPaulDed?<Gameover/>:null}
      

    </div>
    
  );
}

export default App;
