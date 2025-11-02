import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? <h1>Toggle true!</h1> : <h1>Toggle false!</h1>}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
