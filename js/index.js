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



const toDo = document.querySelector(".toDo__list");
const newToDo = document.querySelector(".site__form");
const input = document.querySelector(".site__input");
const error = document.querySelector(".error");

newToDo.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.length > 0) {
        toDo.innerHTML+=`<li class="list__item">${input.value}<i class="fa-regular fa-circle icon"></i></li>`;
    } else {
        console.log("Input qiymatga ega emas");
    }
    e.target.reset();
})

toDo.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.add("delete");
    }
})


