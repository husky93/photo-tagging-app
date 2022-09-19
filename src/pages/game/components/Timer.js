import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTimer = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: ${(props) => props.theme.primaryColor};
  text-shadow: 1px 1px 0px ${(props) => props.theme.secondaryColor};
`;

const Timer = React.forwardRef(({ stop }, ref) => {
  const [timer, setTimer] = useState('0:00');
  useImperativeHandle(
    ref,
    () => ({
      getTimer: () => {
        return timer;
      },
    }),
    [timer]
  );
  let intervalId;
  useEffect(() => {
    const date = new Date();
    if (!stop) {
      intervalId = setInterval(() => {
        const newDate = new Date();
        const timeDiff = Math.round((newDate - date) / 1000);
        const minutes = Math.floor(timeDiff / 60) % 60;
        const seconds = timeDiff % 60;
        setTimer(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [stop]);
  return <StyledTimer>{timer}</StyledTimer>;
});

Timer.propTypes = {
  stop: PropTypes.bool.isRequired,
};

export default Timer;
