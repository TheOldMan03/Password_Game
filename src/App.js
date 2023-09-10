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
          <span>Please Choose a password</span>

          {/* <input type="text" className='pwdinput'  /> */}
          <textarea 
            className='pwdinput' 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            onInput={ResizeArea}
          ></textarea>

        </div>

      </div>

    </div>
  );
}

export default App;
