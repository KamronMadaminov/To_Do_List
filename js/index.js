const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const weekDay = document.querySelector(".week__day");

const currentDate = new Date();

day.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();

const dayOfWeek = currentDate.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
weekDay.innerHTML = weekdays[dayOfWeek];

var monthStr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month1 = currentDate.getMonth();
month.innerHTML = monthStr[month1];

const toDo = document.querySelector(".toDo__list"); // ul
const newToDo = document.querySelector(".site__form"); // form
const input = document.querySelector(".site__input"); // input
const error = document.querySelector(".error"); //

function loadToDoItems() {
  const storedItems = JSON.parse(localStorage.getItem("toDoItems")) || [];
  //   for (const itemText of storedItems) {
  //     createToDoItem(itemText);
  //   }
  for (let i = 0; i < storedItems.length; i++) {
    createToDoItem(storedItems[i]);
  }
}

function saveToDoItems() {
  const toDoItems = Array.from(toDo.children).map((li) => li.textContent);
  localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
}

// Create a new to-do item
function createToDoItem(text) {
  let li = document.createElement("li");
  let icon = document.createElement("i");

  icon.classList.add("fa-regular", "fa-circle", "icon");

  li.appendChild(document.createTextNode(text));
  li.appendChild(icon);

  li.className = "list__item";
  toDo.appendChild(li);
  saveToDoItems();
}

newToDo.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = input.value.trim();
  if (val.length > 0) {
    if (val.length > 39) {
      val = val.substring(0, 36) + "...";
    }
    createToDoItem(val);
    input.value = "";
  } else {
    console.log("Input qiymatga ega emas");
  }
  //   e.target.reset();
});

// evennt delegation
toDo.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (confirm("make sure to delete it?") == true) {
      e.target.remove();
      saveToDoItems();
    } else {
      return;
    }
  } else if (e.target.tagName === "I") {
    e.target.parentElement.classList.toggle("delete");
    saveToDoItems();
  }
});

loadToDoItems();
