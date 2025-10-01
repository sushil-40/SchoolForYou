import React, { useState } from "react";

const Header = (props) => {
  const [headerData, setHeaderData] = useState("Initial Header Data");
  //   console.log(props);
  function changeData() {
    props.func(headerData);
  }
  //   props.func("Hello from Header as a children data.");
  return <div onClick={changeData}>Header</div>;
};

export default Header;
