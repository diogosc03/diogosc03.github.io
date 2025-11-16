const toggleTheme = document.getElementById("s-toggle-theme");
const rootHmtl = document.documentElement;
const accordionHeaders = document.querySelectorAll(".s-accordion__header");
const menuLinks = document.querySelectorAll(".s-menu__link");

function changeTheme() {
  const currentTheme = rootHmtl.getAttribute("data-theme");

  if (currentTheme === "dark") rootHmtl.setAttribute("data-theme", "light");
  else rootHmtl.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
