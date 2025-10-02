import React, { useState } from "react";

const Header = (props) => {
  const [headerData, setHeaderData] = useState("Initial Header Data");
  //   console.log(props);
  function changeData() {
    props.func(headerData);
  }
  const handleOnButtonClick = () => {
    setHeaderData("Data updated from Header from button Click");
    console.log(headerData);
  };
  //   props.func("Hello from Header as a children data.");
  return (
    <>
      <div onClick={changeData}>Header</div>
      <button
        className="bg-blue-600 rounded-2xl p-4"
        onClick={handleOnButtonClick}
      >
        Click From Header
      </button>
    </>
  );
};

export default Header;
