import React from "react";

const Card = ({ name, age, data, isStudent }) => {
  return (
    <div className="card">
      <div>{name}</div>
      <h1>{age}</h1>
      <div>{data?.title}</div>
      <h4>{data?.rank}</h4>
      <h3>{isStudent}</h3>
    </div>
  );
};

export default Card;
