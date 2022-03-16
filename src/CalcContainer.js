import React from "react";
import Addition from "./Addition";
import Subtraction from "./Subtraction";
import "./CalcContainer.css";

function CalcContainer() {
  return (
    <div className="CalcContainer">
      <Addition />
      <Subtraction />
    </div>
  );
}

export default CalcContainer;
