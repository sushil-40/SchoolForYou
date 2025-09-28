import "./App.css";
import Header from "./Header";
import React from "react";
function App() {
  // function greet() {
  //   return "My name is Sushil!";
  // }
  // let age = 30;
  // let isOUtOfStock = true;
  // let arr = ["Ironman", "Spiderman", "Wanda", "Captain"];
  // let ttl = <h2>alpha from {4 + 24} App.js</h2>;
  // let name = "Sushil";
  let user = {
    name: "Sushil",
    age: 27,
  };
  return (
    <div>
      {/* <h1 style={{ color: "red" }}>Lorem ipsum</h1> */}
      {/* <p>{greet()}</p>
      <p>{age >= 18 ? "You can drive!" : "You cannot drive!"}</p> */}
      {/* 
      {age > 18 ? (
        <p style={{ color: "green" }}>You can drive</p>
      ) : (
        <p style={{ color: "red" }}>You cannot drive</p>
      )} */}

      {/* {isOUtOfStock && <p>Out of Stock</p>} */}
      {/* 
      {arr.map((items, idx) => {
        // <p id={idx}>{items}</p>;
        return <p key={idx}>{items}</p>;
      })} */}
      {/* <Header title={ttl} /> */}
      {/* {React.createElement(
        "h1",
        { className: "heading", style: { backgroundColor: "red" } },
        "Hello Sushil!"
      )} */}
      {/* {React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { style: { backgroundColor: "red" } },
          "Hello Paragraph"
        )
      )} */}
      {/* 
      {React.createElement(
        "a",
        { href: "https://www.sushilportfolio.com" },
        "Portfolio"
      )} */}
      {/* {React.createElement(
        "h1",
        null,
        React.createElement("p", null, `My name is ${name}.`),
        React.createElement("p", null, `My name is ${name}.`),
        React.createElement("p", null, `My name is ${name}.`),
        `My name is ${name}.`
      )} */}

      {React.createElement(
        "div",
        { className: "card" },
        React.createElement("h1", null, `${user.name}`),
        React.createElement("p", null, `You are ${user.age + 1} years old.`)
      )}
    </div>
  );
}

export default App;
