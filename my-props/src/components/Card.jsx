import React from "react";

const Card = (props) => {
  console.log(props);
  return <div className="card">{props.name}</div>;
};

export default Card;
