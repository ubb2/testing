const container = document.querySelector("#container");
// document.querySelector makes the first element/node with the specific thing
// into the var
// # is for id syntax, can also use classes and the tag itself

// document.querySelectorAll returns a container with all nodes with
// the specific thing

/*
// creates the element
const redText = document.createElement("p");
// styles the element
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

// puts the element as a child of container which therefore puts element into the webpage
// because container is already in the webpage
container.appendChild(redText);

const blueHead = document.createElement("h3");
blueHead.textContent = "Hey I'm a blue h3!";
blueHead.style.color = "blue";
container.appendChild(blueHead);

const back = document.createElement("div");
back.style.backgroundColor = "pink";
back.style.border = "black";

const inDivH = document.createElement("h1");
inDivH.textContent = "Hey I'm in a div";

const inDivP = document.createElement("p");
inDivP.textContent = "ME TOO!";

back.appendChild(inDivH);
back.appendChild(inDivP);
container.appendChild(back);

*/

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("clicked");
});

// if we have a lot of buttons
// we can use querySelectorAll to grab all of them into a single var container
// then use the .forEach(element) method to loop through them
// element is just a parameter name for the item in the container

// different events to listen to:
// click, dblclick, keydown, keyup
