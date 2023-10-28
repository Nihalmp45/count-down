import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialMinutes = 1; // 5 minutes
  const [timeRemaining, setTimeRemaining] = useState(initialMinutes * 60); // Convert to seconds
  const totalTime = initialMinutes * 60;

  const startCountdown = () => {
    if (timeRemaining > 0) {
      setTimeRemaining(timeRemaining - 1);
    }
  };

  const addTime = () => {
    setTimeRemaining(timeRemaining + 10); // Allow infinite adjustment
  };

  const resetTime = () => {
    setTimeRemaining(initialMinutes * 60);
  };

  useEffect(() => {
    const timer = setInterval(startCountdown, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);




  return (
    <div className="App">
      <div id="countdown-container">
        <h3>Routine Starting in ...</h3>
        <div id="timer">
          <div id="progress-container">
            <div id="outer-ring" ></div>
            <div id="progress-bar">
              <div className="time-remaining">
                {new Date(timeRemaining * 1000).toISOString().substr(14, 5)}
              </div>
            </div>
          </div>
        </div>
        <button onClick={addTime}>+ 10 seconds</button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
}

export default App;
