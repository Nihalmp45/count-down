import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './App.css'

const App = () => {
  const initialTime = 60; // 1 minute in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const totalTime = initialTime;

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const progress = (timeRemaining / totalTime) * 100;

  const addTime = (seconds) => {
    setTimeRemaining(timeRemaining + seconds);
  };

  const resetTime = () => {
    setTimeRemaining(initialTime);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Routine Starting in ...</h3>
      <PieChart
        data={[
          { title: 'Time Remaining', value: progress, color: '#7342A9' },
          { title: 'Remaining', value: 100 - progress, color: '#f0f2f5' },
        ]}
        lineWidth={15}
        style={{ width: '200px', height: '200px' }}
      />
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{timeRemaining}</div>
      <div className='button-container'>
      <button onClick={() => addTime(10)}>+ 10 sec</button>
      <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
};


export default App
