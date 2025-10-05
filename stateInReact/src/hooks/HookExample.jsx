import React, { useEffect, useState } from "react";

const HookExample = () => {
  const [count, setCount] = useState(0);
  const [decValue, setDecValue] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setDecValue((prev) => prev - 1);
  };

  useEffect(() => {
    // alert("Hello I am using useEffect hook");
    console.log("Hello how are you?");
  }, [count, decValue]);
  return (
    <div>
      <h1>hookExample</h1>
      <div className="hookExample">{count}</div>
      <button
        style={{ border: "1px", backgroundColor: "green" }}
        onClick={increment}
      >
        Increment from Hook
      </button>
      <div className="hookExample">{decValue}</div>
      <button
        style={{ border: "1px", backgroundColor: "yellow" }}
        onClick={decrement}
      >
        Decrement from Hook
      </button>
    </div>
  );
};

export default HookExample;
