const compareTimes = (a, b) => {
  const timeA = a.time.split(':');
  const timeB = b.time.split(':');
  const minutesA = parseInt(timeA[0], 10);
  const minutesB = parseInt(timeB[0], 10);
  const secondsA = parseInt(timeA[1], 10);
  const secondsB = parseInt(timeB[1], 10);

  if (minutesB > minutesA) return -1;
  if (secondsB > secondsA) return -1;
  if (minutesB === minutesA && secondsB === secondsA) return 0;
  return 1;
};

export default compareTimes;
