import React from "react";

const RenderingMethod = () => {
  const hasMessage = "Has Message";
  return (
    <div>
      {
        hasMessage && <h1>{hasMessage}</h1>

        // && <h1>No Message</h1>
      }
    </div>
  );
};

export default RenderingMethod;
