import React, { useState } from "react";
import "./CalcContainer.css";

function Addition() {
  let addNums = [];
  const [addAns, setAddAns] = useState("");

  function calcSum(event) {
    event.preventDefault();
    // let add1 = document.getElementById("add1").value;
    // let add2 = document.getElementById("add2").value;
    // let sum = Number(add1) + Number(add2);
    // setAddAns(sum);
    console.log("button clicked");
  }

  function getValue(event) {
    event.preventDefault();
    let add1 = event.target.value;
    addNums.push(add1);
    console.log(addNums);
  }

  return (
    <div className="Addition">
      <input type="number" id="add1" onInput={getValue}></input>
      <span className="operator">+</span>
      <input type="number" id="add2" onInput={getValue}></input>
      <button className="equal-button" onClick={calcSum}>
        =
      </button>
      <input type="number" id="addAns" value={addAns}></input>
    </div>
  );
}

export default Addition;
