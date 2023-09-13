import './App.css';
import Condition from './Condition';
import { RuleInfo } from './Data';
import { useState } from 'react';
import { CountCheck } from './PasswordCheck';

function App() {

  const [password,setPassword]=useState('')
  const [wordCount,setWordCount]=useState(0)

  const [data,setData]=useState([
    {id:1,rule:"Rule 1",desc:"Your password must be at least 5 characters",execute:CountCheck(wordCount),curr:false,isNext:false,truth:false},
    {id:2,rule:"Rule 2",desc:"Your password must contain a number",execute:"A function",curr:false,isNext:false,truth:false},
    {id:3,rule:"Rule 3",desc:"Your password must contain an uppercase letter",execute:"A function",curr:false,isNext:false,truth:false},
    {id:4,rule:"Rule 4",desc:"The digits in your password must add upto 5",execute:"A function",curr:false,isNext:false,truth:false},
  ])


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
    <RuleInfo.Provider value={{data,setData,password,setPassword}}>
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
            data.map((datax,index)=>{
              if(index===0){
                if(wordCount>0){
                  datax.curr=true
                }

                if(datax.execute){
                  datax.truth=true;
                  datax.isNext=true;
                }

                if(!datax.execute){
                  datax.truth=false;
                }

                if(datax.curr){
                  return(<Condition rulename={datax.rule} ruledesc={datax.desc} trueValue={datax.truth}/>)
                }



              }
            })
          }

        </div>

      </div>
    </RuleInfo.Provider>
    
  );
}

export default App;
