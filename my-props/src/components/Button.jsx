import React from "react";

const Button = ({ title, func }) => {
  return (
    <div className="btn">
      <button className="btn-content" onClick={func}>
        {title}
      </button>
    </div>
  );
};

export default Button;
