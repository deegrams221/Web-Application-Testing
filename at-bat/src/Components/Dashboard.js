import React, { useState } from 'react';
import Display from './Display';

export default function Dashboard () {
  const [balls, setBalls] = useState(0);

  const ballsIncrement = () => {
    if(balls < 4){
      setBalls(balls + 1);
    } else {
        setBalls(0)
    }
  }

  return(
    <div>
      <h1>Dashboard</h1>
        <button onClick={() => ballsIncrement()}>Ball</button>
        <button>Strike</button>
        <button>Foul</button>
        <button>Hit</button>
        <Display balls={balls} setBalls={setBalls}/>
    </div>
  );
}  