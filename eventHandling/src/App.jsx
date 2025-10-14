import "./App.css";

function App() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  const hnadleOnClick = (name) => {
    console.log(`${name} hello how are you?`);
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
    </div>
  );
}

export default App;
