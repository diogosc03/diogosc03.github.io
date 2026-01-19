// Lista de ícones para o tema light
const lightIcons = [
  "./src/img/svg/html-light.svg",
  "./src/img/svg/css-light.svg",
  "./src/img/svg/js-light.svg"
];

// Lista de ícones para o tema dark
const darkIcons = [
  "./src/img/svg/html-dark.svg",
  "./src/img/svg/css-dark.svg",
  "./src/img/svg/js-dark.svg"
];

const body = document.body;
const techImages = document.querySelectorAll("#icon__logo") // Imagens dos ícones
const toggleButton = document.querySelector("#toggle__icon"); // Botão de troca do tema 
let toggled = true;

// Verifica se já existe um tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(savedTheme);
} else {
  body.classList.add("light-theme"); // Tema padrão
}

function changeTheme() {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  // Descobre qual tema está ativo
  const currentTheme = body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";

  // 3️⃣ Salva no localStorage
  localStorage.setItem("theme", currentTheme);

  /*if (toggled) {
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
  }*/

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
