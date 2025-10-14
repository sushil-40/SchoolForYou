import "./App.css";

function App() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  const hnadleOnClick = (name) => {
    console.log(`${name} hello how are you?`);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit event triggered.");
  };
  const parentHandler = (e) => {
    console.log("Parent Clicked");
  };
  const childHandler = (e, name) => {
    e.stopPropagation();
    console.log(`${name} Child Clicked`);
  };
  return (
    <div className="wrapper flex-col justify-center items-center mt-5 gap-5">
      <div className="bg-red-500 p-5">
        <h3 className="text-center">Hello School4U</h3>
      </div>
      <div className="p-5 flex justify-center">
        <button
          onClick={() => alert("clicked!")}
          className="bg-blue-400 rounded p-3"
        >
          Click
        </button>
        <input
          className="border-sky-100"
          onChange={handleOnChange}
          type="text"
          placeholder="Type here"
        />
        <button
          onClick={() => hnadleOnClick("Sushil")}
          className="bg-black text-white border-2 rounded-2xl"
        >
          ClickWithPassingReference
        </button>
      </div>

      <form className="flex gap-3" onSubmit={handleOnSubmit}>
        <input
          className="border-2 border-sky-400 rounded p-2"
          type="text"
          placeholder="Enter your name"
        />
        <button>Submit</button>
      </form>
      <div onClick={parentHandler} className="mt-5 p-5 bg-amber-500">
        ParentClick{" "}
        <button
          className="bg-red-400 p-5"
          // onClick={childHandler}
          onClick={(e) => {
            childHandler(e, "Sushil");
          }}
        >
          ChildClick
        </button>
      </div>
    </div>
  );
}

export default App;
