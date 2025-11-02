import React, { Component } from "react";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
const ContentVar = () => {
  let content = <h1>Hello how are you</h1>;
  const option = "a";
  if (option === "a") {
    content = <ComponentA />;
  } else if (option === "b") {
    content = <ComponentB />;
  } else {
    content = <ComponentC />;
  }
  return <div>{content}</div>;
};

export default ContentVar;
