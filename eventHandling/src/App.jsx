import "./App.css";

function App() {
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
      </div>
    </div>
  );
}

export default App;
