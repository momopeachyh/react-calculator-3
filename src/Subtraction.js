import React, { useState } from "react";
import "./CalcContainer.css";

function Subtraction() {
  const [addAns, setAddAns] = useState("");

  function calcDifference(event) {
    event.preventDefault();
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let difference = Number(sub1) - Number(sub2);
    setAddAns(difference);
  }

  return (
    <div className="Subtraction">
      <input type="number" id="sub1"></input>
      <span className="operator">-</span>
      <input type="number" id="sub2"></input>
      <button className="equal-button" onClick={calcDifference}>
        =
      </button>
      <input type="number" id="addAns" value={addAns}></input>
    </div>
  );
}

export default Subtraction;
