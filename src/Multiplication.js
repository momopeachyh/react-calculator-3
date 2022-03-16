import React, { useState } from "react";
import "./CalcContainer.css";

function Multiplication() {
  const [multAns, setMultAns] = useState("");

  function calcProduct(event) {
    event.preventDefault();
    let mult1 = document.getElementById("mult1").value;
    let mult2 = document.getElementById("mult2").value;
    let product = Number(mult1) * Number(mult2);
    setMultAns(product);
  }

  return (
    <div className="Multiplication">
      <input type="number" id="mult1"></input>
      <span className="operator">x</span>
      <input type="number" id="mult2"></input>
      <button className="equal-button" onClick={calcProduct}>
        =
      </button>
      <input type="number" id="addAns" value={multAns}></input>
    </div>
  );
}

export default Multiplication;
