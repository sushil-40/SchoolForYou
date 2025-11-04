import React, { useState } from "react";

const Popup = ({
  popUp,
  setPopUp,
  title,
  description,
  editPopUp,
  setEditPopUp,
}) => {
  return (
    <div>
      {/* popup  */}
      {popUp && (
        <div className="absolute  h-screen bg-black/50 top-0 left-0 w-screen flex items-center justify-center">
          <button
            onClick={() => {
              setPopUp(false);
            }}
            className="absolute top-[1rem] right-[1rem]"
          >
            ❌
          </button>
          <div className="w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-5 flex justify-center items-center flex-col">
            <h1 className="text-2xl">⚠️{title} Confirm</h1>
            <p className="text-lg my-5">{description}</p>
            <div className="flex gap-10">
              <button className="bg-[tomato]">No</button>
              <button className="bg-green-400">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
