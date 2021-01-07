import React, {useState} from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  let[count,setCount]=useState(0);
  let[isDay,setDay]=useState(true);
  return (
    <div className='box'>
      <h1>Day Time={isDay ? 'Day' : 'Night'}</h1>
    <h1>Value of count is {count}</h1>
    <button onClick={()=>setCount(++count)}>Update counter</button>
    </div>
  );
}

export default App;
