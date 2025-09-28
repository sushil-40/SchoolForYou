import React from "react";

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      {props.title}
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
