import { useState, useRef } from "react";
const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // store interval ID

  const startTimer = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // reset reference
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div className=" border-2 border-gray-300 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">
        Timer Component using UseRef
      </h1>
      <h2 className="text-lg font-bold text-red-500">⏱ Count: {count}</h2>
      <button
        className="m-1 bg-blue-500 text-white px-2 py-2 rounded gap-2"
        onClick={startTimer}
      >
        Start
      </button>
      <button
        className="m-1 bg-blue-500 text-white px-2 py-2 rounded gap-2"
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        className="m-1 bg-blue-500 text-white px-2 py-2 rounded gap-2"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};
export default Timer;
