import './App.css';
import { useState,useEffect } from 'react';
import Condition from './Condition'
import {CountCheck,NumberCheck,UpperCheck} from './PasswordCheck'

function App() {

  const [password,setPassword]=useState('')
  const [wordCount,setWordCount]=useState(0)

  const [data,setData]=useState([
    {id:1,rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:()=>CountCheck(wordCount),curr:false,isPrev:false,truth:false},
    {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:()=>NumberCheck(password),curr:false,isPrev:false,truth:false},
    {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:()=>UpperCheck(password),curr:false,isPrev:false,truth:false}
    // {id:4,rule:"Rule 4",desc:"The digits in your password must add upto 5",execute:"A function",curr:false,isPrev:false,truth:false},
  ])

  const ChangeRule=()=>{
    let newData=[];
    newData=data.map((datax,index)=>{
      const newObj={...datax}
      if(index===0){
        if(wordCount>0){
          newObj.curr=true;

          if(newObj.execute()){
            newObj.true=true;
            newObj.isPrev=true;
          }

          else{
            newObj.true=false;
          }
        }
      }

      return newObj;

    })

    setData(newData)
  }

  useEffect(ChangeRule,[password]);
  
  function ResizeArea(e){
    e.target.style.height="1px"
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
            ></textarea>

            <span id="wcount">{wordCount}</span>
          </div>
          
        </div>

        {
          data.map(datax=>{
            if(datax.curr){
              return(<Condition rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>)
            }
          })
        }

      </div>

    </div>
    
  );
}

export default App;
