import React, { useState, useRef } from "react";

const FunctionalCounter = (props) => {
  const [counter, setCounter] = useState(0);

  // HW fix with useRef
  const countRef = useRef(counter);
  countRef.current = counter;

  const addOne = () => {
    setCounter(counter + 1);
  };

  const alerter = () => {
    //  Changed alert(counter) to alert(countRef.current)
    setTimeout(() => alert(countRef.current), 3000);
  };

  return (
    <div className="counter">
      <h2>Functional Component </h2>
      <div className="counter__form">
        <input type="text" value={counter} />
        <button onClick={addOne}>Add 1</button>
        <button onClick={alerter}>Alert</button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Minus 1
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
