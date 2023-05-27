import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(interval);
      alert('Time up!');
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
}


export default Timer
