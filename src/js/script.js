const toggleTheme = document.getElementById("s-toggle-theme");
const rootHmtl = document.documentElement;

function changeTheme() {
  const currentTheme = rootHmtl.getAttribute("data-theme");

  if (currentTheme === "dark") rootHmtl.setAttribute("data-theme", "light");
  else rootHmtl.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
