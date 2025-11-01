import React, { useState } from "react";

const MultiInputField = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const clearHandler = () => {
  //   setName("");
  //   setEmail("");
  // };
  // console.log(name, email);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(data);
  // const nameHandler = (e) => {
  //   setData(function (prev) {
  //     return {
  //       ...prev,
  //       name: e.target.value,
  //     };
  //   });
  // };
  // const emailHandler = (e) => {
  //   setData((prev) => ({ ...prev, email: e.target.value }));
  // };

  const clearHandler = () => {
    setData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const inputHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    // setData({ ...data, [name]: value });
    setData((prev) => ({ ...prev, [name]: value }));
    // setData({})
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        // value={name}
        value={data.name}
        placeholder="Enter Name"
        // onChange={nameHandler}
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="text"
        name="email"
        // value={email}
        value={data.email}
        placeholder="Enter Email"
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="number"
        name="phone"
        // value={email}
        value={data.phone}
        placeholder="Enter Phone"
        onChange={inputHandler}
      />
      <br />
      <br />
      <button onClick={clearHandler}>Clear</button>
      <br />
      <br />
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  );
};

export default MultiInputField;
