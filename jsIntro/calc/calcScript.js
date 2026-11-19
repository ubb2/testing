const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let displayString = "";
const operations = ["/", "*", "?", "+"];

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;
    if (displayString === "invalid") {
      displayString = "";
    }
    if (typeof displayString == "number") {
      displayString = displayString.toString();
    }

    switch (true) {
      case event.target.classList.contains("number") ||
        event.target.classList.contains("operation") ||
        event.target.classList.contains("numberLike"):
        if (event.target.classList.contains("subtract")) {
          displayString += "?";
          break;
        }
        displayString += event.target.textContent;
        break;
      case event.target.classList.contains("AC"):
        displayString = "";
        display.textContent = "|";
        return;
      case event.target.classList.contains("back"):
        displayString = displayString.slice(0, -1);
        if (displayString === "" || displayString === "-") {
          display.textContent = "|";
          displayString = "";
          return;
        }
        break;
      case event.target.classList.contains("equal"):
        displayString = solve();
    }
    temp = "";
    for (i = 0; i < displayString.length; i++) {
      if (displayString[i] === "?") {
        temp += "-";
      } else {
        temp += displayString[i];
      }
    }
    display.textContent = temp;
  });
  return;
});

function solve() {
  if (operations.includes(displayString[0])) {
    return "invalid";
  }
  let total = 0;
  let negates = 0;
  for (i = 0; i < displayString.length; i++) {
    if (operations.includes(displayString[i])) {
      total += 1;
    }
    if (displayString[i] === "-") {
      negates += 1;
    }
    if (total > 1) {
      return "invalid";
    }
  }
  if (total == 0) {
    if (negates > 1) {
      return "invalid";
    }
    return displayString;
  }
  let num1 = "";
  let num2 = "";
  let operation = "";
  for (i = 0; i < displayString.length; i++) {
    if (!operations.includes(displayString[i])) {
      num1 += displayString[i];
    } else {
      operation = displayString[i];
      num2 = displayString.slice(i + 1, displayString.length);
      break;
    }
  }
  let a = Number(num1);
  let b = Number(num2);
  if (Number.isNaN(a) || Number.isNaN(b) || num2 === "") {
    return "invalid";
  }
  return doMath(a, b, operation);
}

function doMath(a, b, op) {
  switch (op) {
    //const operations = ["/", "*", "?", "+"];
    case operations[0]:
      return (Math.round((a / b) * 100) / 100).toString();
    case operations[1]:
      return (Math.round(a * b * 100) / 100).toString();
    case operations[2]:
      return (Math.round((a - b) * 100) / 100).toString();
    case operations[3]:
      return (Math.round((a + b) * 100) / 100).toString();
  }
}
