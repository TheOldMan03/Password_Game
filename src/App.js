import './App.css';
import { useState } from 'react';

function App() {

  const [password,setPassword]=useState('')

  function ResizeArea(e){
    e.target.style.height="1px"
    e.target.style.height=(e.target.scrollHeight)+"px"
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
              onChange={(e)=>setPassword(e.target.value)}
              onInput={ResizeArea}
            ></textarea>

            <span id="wcount">0</span>
          </div>
          

        </div>

      </div>

    </div>
  );
}

export default App;
