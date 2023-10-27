import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialTime = 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const totalTime = initialTime;

 //if time is more than 1 timer always count down by 1
  const startCountdown = () => {               
    if (timeRemaining > 0) {
      setTimeRemaining(timeRemaining - 1);
    }
  };

  //adding time
  const addTime = (seconds) => {
    setTimeRemaining(Math.min(totalTime, timeRemaining + seconds));
  };

  //reset the time to initial 60 sec
  const resetTime = ()=>{
    setTimeRemaining(initialTime);
  }

  useEffect(() => {
    const timer = setInterval(startCountdown, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  const progress = (timeRemaining / totalTime) * 100;

  // Conditionally set the progress bar color to red if timeRemaining is below 10
  const progressBarStyle = {
    background: `conic-gradient(${timeRemaining < 10 ? '#e80c25' : '#3498db'} 0% ${progress}%, #ecf0f1 ${progress}% 100%)`,
  };

  return (
    <div className="App">
      <div id="countdown-container">
        <h3>Routine Starting in ...</h3>
        <div id="countdown">{timeRemaining}</div>
        <div id='timer'>
          <div id="progress-container">
            <div id="progress-bar" style={progressBarStyle}></div>
          </div>
        </div>
        <div className='button-container'>
          <button onClick={() => addTime(10)}>+ 10 sec</button>
          <button onClick={resetTime}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;