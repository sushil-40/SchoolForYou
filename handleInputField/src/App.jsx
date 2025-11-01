import { useRef, useState } from "react";
import "./App.css";
import MultiInputField from "./components/MultiInputField";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  console.log(name);
  function submit() {
    // console.log("hello Address!");
    console.log(inputRef);
    console.log(inputRef.current.value);
  }
  return (
    <>
      {/* <div>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={handleOnChange}
        />
        <br />
        <br />
        <button onClick={() => setName("")}>Clear</button>
        <h1>{name}</h1>
      </div>
      <div>
        <input ref={inputRef} type="text" placeholder="Enter Address" />
        <br />
        <br />
        <button onClick={submit}>Submit</button>
      </div> */}
      <div>
        <MultiInputField />
      </div>
    </>
  );
}

export default App;
