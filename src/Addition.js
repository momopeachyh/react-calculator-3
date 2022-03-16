import React from "react";

function Addition() {
  return (
    <div className="Addition">
      <input type="number" id="add1"></input>
      <span className="operator">+</span>
      <input type="number" id="add2"></input>
      <button>=</button>
      <input type="number" id="addAns"></input>
    </div>
  );
}

export default Addition;
