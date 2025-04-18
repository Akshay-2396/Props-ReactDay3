import React from "react";

const CompC = ({ arr }) => {
  return (
    <div>
      <h1>Component C</h1>
      {arr.map((ele, index) => {
        return (
          <div key={index}>
            <h4>{ele}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CompC;
