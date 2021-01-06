import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
      <Dinner dishName="Chicken karahi" />
      <Dinner dishName="Chicken karahi" />
      <hr/>
      <Dinner dishName="Chicken karahi" />
      <Dinner dishName="Chicken karahi" />
      <hr/>
    </div>
  );
}

export default App;
