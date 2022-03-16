import React, { useState } from "react";
import "./CalcContainer.css";

function Addition() {
  const [addAns, setAddAns] = useState("");

  function calcSum(event) {
    event.preventDefault();
    let add1 = document.getElementById("add1").value;
    let add2 = document.getElementById("add2").value;
    let sum = Number(add1) + Number(add2);
    setAddAns(sum);
  }

  return (
    <div className="Addition">
      <input type="number" id="add1"></input>
      <span className="operator">+</span>
      <input type="number" id="add2"></input>
      <button className="equal-button" onClick={calcSum}>
        =
      </button>
      <input type="number" id="addAns" value={addAns}></input>
    </div>
  );
}

export default Addition;
