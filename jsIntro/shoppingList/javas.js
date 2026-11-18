const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");

function buttonClicked(event) {
  event.preventDefault();
  item = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const listItemContainer = document.createElement("span");
  const itemDeleteButton = document.createElement("button");
  listItem.appendChild(listItemContainer);
  listItem.appendChild(itemDeleteButton);
  listItemContainer.textContent = item;
  itemDeleteButton.textContent = "delete";
  list.appendChild(listItem);
  itemDeleteButton.addEventListener("click", (e) => {
    list.removeChild(listItem);
  });
  input.focus();
}

button.addEventListener("click", buttonClicked);
