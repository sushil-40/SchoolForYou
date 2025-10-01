import React from "react";

const Hero = (props) => {
  console.log(props.data, props.count);

  return <div className="bg-amber-600">Hero</div>;
};

export default Hero;
