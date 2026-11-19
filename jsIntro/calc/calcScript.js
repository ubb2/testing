const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let displayString = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;
    switch (true) {
      case event.target.classList.contains("number"):
        displayString += event.target.textContent;
        break;
      case event.target.classList.contains("operation"):
        displayString += event.target.textContent;
        break;
      case event.target.classList.contains("AC"):
        displayString = "";
        display.textContent = "|";
        return;
      case event.target.classList.contains("back"):
        displayString = displayString.slice(0, -1);
        if (displayString === "") {
          display.textContent = "|";
          return;
        }
        break;
    }
    display.textContent = displayString;
  });
  return;
});
