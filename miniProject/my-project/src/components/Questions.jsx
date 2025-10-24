import React, { useState } from "react";
import questions from "./questions.json";
const Questions = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOptionClick = (selectedOption) => {
    console.log(selectedOption);
    if (selectedOption === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };
  //   console.log(score);
  return (
    <div>
      <h2>{questions[currentIndex].question}</h2>

      <div className="flex flex-col gap-3">
        {" "}
        {questions[currentIndex].options.map((option) => {
          return (
            <button
              key={option}
              onClick={() => {
                handleOptionClick(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
