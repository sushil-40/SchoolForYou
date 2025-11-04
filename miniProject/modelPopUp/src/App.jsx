import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  return (
    <>
      <button
        onClick={() => setPopUp(true)}
        className="bg-black/30 text-amber-40"
      >
        Delete
      </button>
      <button
        onClick={() => setEditPopUp(true)}
        className="bg-black/30 text-amber-40"
      >
        Edit
      </button>
      <Popup
        popUp={popUp}
        setPopUp={setPopUp}
        title={"Delete"}
        description={"Are you sure you want to delete this?"}
      />
      <Popup
        popUp={editPopUp}
        setPopUp={setEditPopUp}
        title={"Edit"}
        description={"Are you sure you want to Edit this?"}
      />
    </>
  );
}

export default App;
