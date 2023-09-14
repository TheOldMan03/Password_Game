import './App.css';
import Condition from './Condition';
import { RuleInfo } from './Data';
import { useEffect, useState } from 'react';
import { CountCheck,NumberCheck,UpperCheck } from './PasswordCheck';

function App() {

  const [password,setPassword]=useState('')
  const [wordCount,setWordCount]=useState(0)

  const [data,setData]=useState([
    {id:1,rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:()=>CountCheck(wordCount),curr:false,isPrev:false,truth:false},
    {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:()=>NumberCheck(password),curr:false,isPrev:false,truth:false},
    {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:()=>UpperCheck(password),curr:false,isPrev:false,truth:false}
    // {id:4,rule:"Rule 4",desc:"The digits in your password must add upto 5",execute:"A function",curr:false,isPrev:false,truth:false},
  ])

  let UpdatedData=[];


  //only do this when the password changes

  useEffect(()=>{
    UpdatedData=data.map((datax,index)=>{
      const newDatax={...datax}
  
      if(index===0){
        if(wordCount>0){
          newDatax.curr=true;

          if(newDatax.execute()){
            newDatax.isPrev=true;
            newDatax.truth=true;
          }
    
          else{
            newDatax.truth=false;
          }
        }
  
        return newDatax
  
      }
  
    })
    setData(UpdatedData)
  }
  ,[password])

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
    <RuleInfo.Provider value={{data,password,setPassword}}>
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
            UpdatedData.map(datax=>{
              return(<Condition rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>)
            })
          }

        </div>

      </div>
    </RuleInfo.Provider>
    
  );
}

export default App;
