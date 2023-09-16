import React, { useState } from "react";

let App = () => {
  let [num1, Setnum1] = useState("");
  let [num2, Setnum2] = useState("");
  //getting numbers from the input field

  let [result, SetResult] = useState("");
  let [error, Seterror] = useState("");
  //usestate varibales for adding success and error messages

  function add() {
    let a = Number(num1);
    let b = Number(num2);

    if (num1 === "" || num2 === "") {
      Seterror("Both fields are mandatory");
      SetResult("");
      //displaying error field and hiding success field
    } else if (isNaN(a) || isNaN(b)) {
      Seterror("Enter a valid Number");
      SetResult("");
      //setting errors if it is not a number
    } else {
      SetResult(a + b);
      Seterror("");
    }
  }
  //addition function
  function sub() {
    let a = Number(num1);
    let b = Number(num2);

    if (num1 === "" || num2 === "") {
      Seterror("Both fields are mandatory");
      SetResult("");
      //displaying error field and hiding success field
    } else if (isNaN(a) || isNaN(b)) {
      Seterror("Enter a valid Number");
      SetResult("");
      //setting errors if it is not a number
    } else {
      SetResult(a - b);
      Seterror("");
    }
  }
  //subtraction function
  function multiply() {
    let a = Number(num1);
    let b = Number(num2);

    if (num1 === "" || num2 === "") {
      Seterror("Both fields are mandatory");
      SetResult("");
      //displaying error field and hiding success field
    } else if (isNaN(a) || isNaN(b)) {
      Seterror("Enter a valid Number");
      SetResult("");
      //setting errors if it is not a number
    } else {
      SetResult(a * b);
      Seterror("");
    }
  }
  //multiplication function
  function divide() {
    let a = Number(num1);
    let b = Number(num2);

    if (num1 === "" || num2 === "") {
      Seterror("Both fields are mandatory");
      SetResult("");
      //displaying error field and hiding success field
    } else if (isNaN(a) || isNaN(b)) {
      Seterror("Enter a valid Number");
      SetResult("");
      //setting errors if it is not a number
    } else {
      SetResult((a / b).toFixed(3));
      Seterror("");
    }
  }
  //divide function

  return (
    //displaying the calculator app
    <div class="calci">
      <h3>React Calculator</h3>
      <input
        type="text"
        placeholder="Num-1"
        onChange={(e) => Setnum1(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Num-2"
        onChange={(e) => Setnum2(e.target.value)}
      ></input>
      <br></br>
      <div class="op">
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>

      <div>
        {/* displaying success and error part */}
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        {result && (
          <div>
            <p class="results">Result: {result} </p>
            <h3 style={{ color: "green" }}>Success!</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
