import React, { useState } from "react";
import "./CalcContainer.css";

function Division() {
  const [divideAns, setAddAns] = useState("");

  function calcQuotient(event) {
    event.preventDefault();
    let divide1 = document.getElementById("divide1").value;
    let divide2 = document.getElementById("divide2").value;
    let quotient = Number(divide1) / Number(divide2);
    setAddAns(quotient);
  }

  return (
    <div className="Division">
      <input type="number" id="divide1"></input>
      <span className="operator">÷</span>
      <input type="number" id="divide2"></input>
      <button className="equal-button" onClick={calcQuotient}>
        =
      </button>
      <input type="number" id="divideAns" value={divideAns}></input>
    </div>
  );
}

export default Division;
