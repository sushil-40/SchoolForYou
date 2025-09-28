import React from "react";

const Comp = ({ title, age = "18" }) => {
  return (
    <div className="card">
      <h2>name = {title}</h2>
      <h4>age = {age}</h4>
    </div>
  );
};

export default Comp;
