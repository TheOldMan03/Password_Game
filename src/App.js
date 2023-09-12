import './App.css';
import Condition from './Condition';
import { RuleInfo } from './Data';
import { useState,useContext } from 'react';

function App() {

  const [password,setPassword]=useState('')
  const [wordCount,setWordCount]=useState(0)

  const DataContext=useContext(RuleInfo);

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
    <RuleInfo.Provider>
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

          <Condition/>

        </div>

      </div>
    </RuleInfo.Provider>
    
  );
}

export default App;
