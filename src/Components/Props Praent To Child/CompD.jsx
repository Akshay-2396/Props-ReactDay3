import React from "react";

const CompD = ({ arrobj }) => {
  return (
    <div>
      <h1>Component D</h1>
      {arrobj.map((ele, index) => {
        return (
          <div key={index}>
            <h4>{ele.id}</h4>
            <h4>{ele.name}</h4>
            <h4>{ele.age}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CompD;
