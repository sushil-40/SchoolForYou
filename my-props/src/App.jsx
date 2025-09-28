import "./App.css";
import Card from "./components/Card";

function App() {
  const obj = {
    title: "Test",
    rank: 21,
  };
  return (
    <div className="layout">
      <Card name="Sushil Dangoriya" age={24} data={obj} isStudent={true} />
      <Card name="Zarina Khan" />
      <Card data={obj} isStudent={true} />
      {/* <Card name="Sunita Dangoriya" />
      <Card name="Satya Narayan Dangoriya" /> */}
    </div>
  );
}

export default App;
