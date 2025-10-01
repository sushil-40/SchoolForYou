import React from "react";
import Hero from "./Hero";
import About from "./About";

const Layout = (props) => {
  const [count, setCount] = React.useState(55);
  console.log(props.data);
  return (
    <div className="h-[20vh] bg-gray-400 w-full p-5">
      Layout
      <Hero data={props.data} count={count} />
      <About data={props.data} count={count} />
    </div>
  );
};

export default Layout;
