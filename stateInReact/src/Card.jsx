import React, { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    // setCount(function (prev) {
    //   return prev + 1;
    // });

    setCount((prev) => prev + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Card;
