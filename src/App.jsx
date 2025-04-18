import React from "react";
// import Practice from "./Components/CSS In React/Practice";
import CompA from "./Components/Props Praent To Child/CompA";
import CompB from "./Components/Props Praent To Child/CompB";
import CompC from "./Components/Props Praent To Child/CompC";
import CompD from "./Components/Props Praent To Child/CompD";
import Product from "./Components/Props Child To Parents/Product";

const App = () => {
  let initialCartValue = 0;
  const cartFunction = (product) => {
    console.log(product);
    initialCartValue += 1;
    console.log(initialCartValue);
  };

  let a = 10;
  const arr = [1, 2, 3, 4, 5];
  const obj = { batch: "FSD-WD-T-B21", mode: "Weekday", studentName: "Akshay" };
  const arrobj = [
    { id: 1, name: "sam", age: 25 },
    { id: 2, name: "jhon", age: 45 },
    { id: 3, name: "ram", age: 55 },
  ];

  return (
    <div>
      <h1>Items</h1>
      {/* <Practice/> */}
      {/* <CompA a={a}/>
    <CompB obj={obj}/>
    <CompC arr={arr}/>
    <CompD arrobj={arrobj}/> */}
      <Product cartFunction={cartFunction} />
    </div>
  );
};

export default App;
