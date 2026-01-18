const body = document.body;
const toggleButton = document.querySelector("#toggle__icon");
let toggled = true;

function changeTheme() {
  if (toggled) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggled = false;
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggled = true;
  }

  toggleButton.classList.toggle("bi-sun");
  toggleButton.classList.toggle("bi-moon");
}

toggleButton.addEventListener("click", changeTheme);