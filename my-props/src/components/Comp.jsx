import React from "react";

const Comp = ({ title, age = "18", name, rank }) => {
  return (
    <div className="card">
      <h2>name = {title}</h2>
      <h4>age = {age}</h4>
      <h5>{name}</h5>
      <h6>{rank}</h6>
    </div>
  );
};

export default Comp;
