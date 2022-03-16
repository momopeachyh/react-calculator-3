import React from "react";
import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import Division from "./Division";
import "./CalcContainer.css";

function CalcContainer() {
  return (
    <div className="CalcContainer">
      <Addition />
      <Subtraction />
      <Multiplication />
      <Division />
    </div>
  );
}

export default CalcContainer;
