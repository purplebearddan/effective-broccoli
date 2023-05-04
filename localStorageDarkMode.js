const darkModeToggleButton = document.querySelector("#darkModeToggleButton");

// function to toggle DarkMode
const darkModeToggle = () => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(!JSON.parse(localStorage.getItem("darkMode")))
  );
  const darkModeState = JSON.parse(localStorage.getItem("darkMode"));
  if (darkModeState) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  //   document.body.classList.toggle("dark");
};

// add dark to the body if the localStorage value is true
const darkModeOnLoad = () => {
  // get the value from localStorage
  const darkModeState = JSON.parse(localStorage.getItem("darkMode"));

  if (darkModeState) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

window.addEventListener("load", darkModeOnLoad);

darkModeToggleButton.addEventListener("click", darkModeToggle);
