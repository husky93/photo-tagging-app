import { useState, useEffect } from 'react';

const Timer = ({ stop }) => {
  const [timer, setTimer] = useState('0:00');

  useEffect(() => {
    const date = new Date();
    let interval;
    if (!stop) {
      interval = setInterval(() => {
        const newDate = new Date();
        const timeDiff = Math.round((newDate - date) / 1000);
        const minutes = Math.floor(timeDiff / 60) % 60;
        const seconds = timeDiff % 60;
        setTimer(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [stop]);
  return <div>{timer}</div>;
};

export default Timer;
