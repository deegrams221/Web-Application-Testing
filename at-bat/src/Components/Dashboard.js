import React, {useState} from 'react';
import Display from './Display';

export const addBalls = balls => {
  return balls + 1;
}

export const addStrikes = strikes => {
  return strikes + 1;
}

export default function Dashboard () {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ballsIncrement = () => {
    if(balls < 4){
      setBalls(addBalls(balls));
    } else {
      setBalls(0);
    }
  }

  const strikesIncrement = () => {
    if(strikes < 3){
      setStrikes(addStrikes(strikes));
    } else {
      setStrikes(0);
    }
  }

  const foulIncrement = () => {
    if(strikes === 0){
      setStrikes(1);
    } else if (strikes === 1) {
      setStrikes(2);
    } else {
      setStrikes(strikes);
    }
  }

  return(
    <div>
      <h1>Baseball App</h1>
        <Display balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes} />
        <button onClick={() => ballsIncrement()}>Ball</button>
        <button onClick={() => strikesIncrement()}>Strike</button>
        <button onClick={() => foulIncrement()}>Foul</button>
        <button>Hit</button>
    </div>
  );
}  