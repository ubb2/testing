const containerBoxes = document.querySelector("#containerBoxes");
let measures = containerBoxes.getBoundingClientRect();
let width = measures.width;
let height = measures.height;
const button = document.querySelector(".button");
const input = document.querySelector("input");
let boxHeight = 0;
let boxWidth = 0;
const basicBox = document.createElement("div");
basicBox.classList.add("box");
let colorQueue = [];
let colorSet = [
  "black",
  "dimgray",
  "gray",
  "darkgray",
  "silver",
  "lightgray",
  "white",
];

button.addEventListener("click", (event) => {
  event.preventDefault();
  boxNum = input.value;
  makeGrid(boxNum);
});

function resize() {
  if (width == height) {
    return;
  }
  if (width > height) {
    console.log("width>" + "height is " + height + ", width is " + width);
    width = height;
    containerBoxes.style.maxWidth = height + "px";

    return;
  } else {
    console.log("height>" + "height is " + height + ", width is " + width);
    height = width;
    containerBoxes.style.maxHeight = width + "px";
    return;
  }
}

function makeGrid(num) {
  containerBoxes.replaceChildren();
  resize();
  boxHeight = height / boxNum;
  boxWidth = width / boxNum;
  basicBox.style.width = boxWidth + "px";
  basicBox.style.height = boxHeight + "px";
  for (i = 0; i < num * num; i++) {
    containerBoxes.appendChild(basicBox.cloneNode(false));
  }
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      colorQueue.push(e.target);
      if (colorQueue.length > 7) {
        colorQueue.shift();
      }
      for (i = 0; i < colorQueue.length; i++) {
        colorQueue[i].style.backgroundColor = colorSet[i];
      }
    });
  });
  return;
}
