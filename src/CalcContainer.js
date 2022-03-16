import React from "react";
import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import "./CalcContainer.css";

function CalcContainer() {
  return (
    <div className="CalcContainer">
      <Addition />
      <Subtraction />
      <Multiplication />
    </div>
  );
}

export default CalcContainer;
