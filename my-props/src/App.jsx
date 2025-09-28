import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const obj = {
    title: "Test",
    rank: 21,
  };
  const buttonOnClick = () => {
    console.log("Button is clicked  1.");
    setTimeout(() => {
      const date = new Date();
      console.log(date);
    }, 1000);
  };
  function buttonTwoClick() {
    console.log("2nd Button Clicked!");
  }
  return (
    <div className="layout">
      <Card
        name="Sushil Dangoriya"
        age={24}
        data={obj}
        isStudent={true}
        content={
          <>
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              provident.
            </p>
          </>
        }
      />
      {/* <Card name="Zarina Khan" />
      <Card data={obj} isStudent={true} /> */}
      <Button title="Click Me" func={buttonOnClick} />
      <Button title="Touch Me" func={buttonTwoClick} />
    </div>
  );
}

export default App;
