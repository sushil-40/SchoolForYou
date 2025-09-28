import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="layout">
      <Card name="Sushil Dangoriya" age={24} />
      <Card name="Zarina Khan" age={23} />
      <Card name="Tej Kumari Dangoriya" />
      <Card name="Sunita Dangoriya" />
      <Card name="Satya Narayan Dangoriya" />
    </div>
  );
}

export default App;
