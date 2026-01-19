const lightIcons = [
  "./src/img/svg/html-light.svg",
  "./src/img/svg/css-light.svg",
  "./src/img/svg/js-light.svg"
];
const darkIcons = [
  "./src/img/svg/html-dark.svg",
  "./src/img/svg/css-dark.svg",
  "./src/img/svg/js-dark.svg"
];

const body = document.body;
const techImages = document.querySelectorAll("#icon__logo")
const toggleButton = document.querySelector("#toggle__icon");
let toggled = true;

function changeTheme() {
  if (toggled) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    techImages.forEach((img) => {
      img.setAttribute("src", darkIcons[img.dataset.key])
    });

    toggled = false;
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    techImages.forEach((img) => {
      img.setAttribute("src", lightIcons[img.dataset.key])
    });

    toggled = true;
  }

  toggleButton.classList.toggle("bi-sun");
  toggleButton.classList.toggle("bi-moon");
}

toggleButton.addEventListener("click", changeTheme);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu__item a")

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const pageBottom = window.innerHeight + scrollPosition >= document.body.scrollHeight - 5;

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollPosition >= sectionTop) {
      current = section.id;
    }
  });

  if (pageBottom) {
    current = sections[sections.length - 1].id;
  }

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
});
