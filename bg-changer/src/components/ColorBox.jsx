import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="m-auto w-[300px] h-[300px] rounded2xl font-extrabold text-center content-center text-white border-2"
    >
      {color.toUpperCase()}
    </div>
  );
};

export default ColorBox;
