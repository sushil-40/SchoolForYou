import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  const [data, setData] = useState("Sushil Dangoriya");
  console.log(data);

  function parentReciever(data) {
    setData(data);
    // console.log("Data from child: ", data);
  }
  console.log(data);
  return (
    <>
      <Header data={data} func={parentReciever} />
      <Layout data={data} />
      <Footer data={data} />
    </>
  );
}

export default App;
