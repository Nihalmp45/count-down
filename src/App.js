import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const App = () => {
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
  const totalTime = 300; // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const progress = (timeRemaining / totalTime) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Routine Starting in ...</h3>
      <PieChart
        data={[
          { title: 'Time Remaining', value: progress, color: '#e80c25' },
          { title: 'Remaining', value: 100 - progress, color: '#ccc' },
        ]}
        lineWidth={15}
        style={{ width: '200px', height: '200px' }}
      />
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{timeRemaining}</div>
      <button onClick={() => setTimeRemaining(timeRemaining + 10)}>+ 10 seconds</button>
    </div>
  );
};

export default App
