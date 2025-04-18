import React from "react";

const CompB = (props) => {
  return (
    <div>
      <h1>Component B</h1>
      <h4>{props.obj.batch}</h4>
      <h4>{props.obj.mode}</h4>
      <h4>{props.obj.studentName}</h4>
    </div>
  );
};

export default CompB;
