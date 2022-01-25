const numbers = document.querySelectorAll(".number");
const screen = document.getElementById("screen");
const point = document.getElementById("point");
const operators = document.querySelectorAll(".operator");
const resolve = document.getElementById("resolve");
const deleted = document.getElementById("deleted");
const off = document.getElementById("on-off");

let newValue = "";
let oldValue = "";
let operator = null;

off.addEventListener("click", (event) => {
  screen.innerHTML = "";
  setTimeout(function () {
    window.location.replace("http://stackoverflow.com");
  }, 525);
});

deleted.addEventListener("click", (event) => {
  newValue = "";
  oldValue = "";
  pointExist = false;

  operator = null;
  screen.innerHTML = 0;
});

function calculator(n1, n2, operator) {
  let r = 0;
  switch (operator) {
    case "-":
      r = parseFloat(n2) - parseFloat(n1);
      break;
    case "+":
      r = parseFloat(n2) + parseFloat(n1);
      break;
    case "x":
      r = parseFloat(n2) * parseFloat(n1);
      break;
    case "/":
      r = parseFloat(n2) / parseFloat(n1);
      break;
  }

  if (r.toString().length > 12) {
    return r.toPrecision(7);
  }

  return r;
}

numbers.forEach((num) => {
  num.addEventListener("click", (event) => {
    if (newValue.length < 12) {
      newValue += num.innerHTML;
      screen.innerHTML = newValue;
    }
  });
});

point.addEventListener("click", (event) => {
  if (!newValue.includes(".")) {
    newValue += ".";
  }
});

operators.forEach((op) => {
  op.addEventListener("click", (event) => {
    if (!newValue) {
      return;
    } else if (!operator) {
      operator = op.innerHTML;
      oldValue = newValue;

      newValue = "";
      screen.innerHTML = 0;
    }
  });
});

resolve.addEventListener("click", (event) => {
  if (!oldValue) {
    return;
  }
  newValue = calculator(newValue, oldValue, operator);
  operator = null;
  oldValue = "";
  screen.innerHTML = newValue;
});
