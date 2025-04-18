import React from "react";

const CompB = ({ obj }) => {
  return (
    <div>
      <h1>Component B</h1>
      <h4>{obj.batch}</h4>
      <h4>{obj.mode}</h4>
      <h4>{obj.studentName}</h4>
    </div>
  );
};

export default CompB;
