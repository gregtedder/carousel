import React, { useState } from 'react';

const AppState = () => {
  const [delay, setDelay] = useState(5);
  const [autoScroll, setAutoScroll] = useState(true);
  return {
    delay,
    setDelay,
    autoScroll,
    setAutoScroll
  }
}

export default AppState;
