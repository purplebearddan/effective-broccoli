const exampleData = [
  {
    name: "John",
    age: 23,
  },
  {
    name: "Barry",
    age: 22,
  },
  {
    name: "Claire",
    age: 27,
  },
  {
    name: "Dave",
    age: 24,
  },
  {
    name: "Sarah",
    age: 29,
  },
];

localStorage.setItem("users", JSON.stringify(exampleData));

window.addEventListener("load", () => {
  // select the element to retrieve
  const usersListElement = document.querySelector("#usersList>dl");

  // get the data from localStorage
  const dataFromStorage = JSON.parse(localStorage.getItem("users"));

  // add each user to the page
  dataFromStorage.map((user) => {
    usersListElement.innerHTML += `
    <dt>${user.name}</dt>
    <dd>${user.age}</dd>
    `;
  });
});

const parse = JSON.parse;
const stringify = JSON.stringify;

log();
