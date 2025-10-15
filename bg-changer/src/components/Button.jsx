import React from "react";

const Button = ({ color, setSelectedColor, children }) => {
  console.log(color);
  const setColor = () => {
    setSelectedColor(color);
  };
  return (
    <button
      onClick={setColor}
      style={{ backgroundColor: color, color: "white" }}
    >
      {children}
    </button>
  );
};

export default Button;
