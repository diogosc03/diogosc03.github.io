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

  // Salva no localStorage
  localStorage.setItem("theme", currentTheme);

  // Altera os imagens dos ícones de acordo com o tema ativo
  if (currentTheme === "dark-theme") {
    techImages.forEach((img) => {
      img.setAttribute("src", darkIcons[img.dataset.key])
    });
  } else {
    techImages.forEach((img) => {
      img.setAttribute("src", lightIcons[img.dataset.key])
    });
  }

  // Altera o ícone do botão segundo o tema ativo
  toggleButton.classList.toggle("bi-sun");
  toggleButton.classList.toggle("bi-moon");
}

// Evento de clique para alternar o botão
toggleButton.addEventListener("click", changeTheme);

const sections = document.querySelectorAll("section"); // Seções da página
const navLinks = document.querySelectorAll(".menu__item a") // Botões do menu de navegação

// Evento de scroll da tela
window.addEventListener('scroll', () => {
  // Posição vertical do scroll
  const scrollPosition = window.scrollY;
  // Posição final da tela
  const pageBottom = window.innerHeight + scrollPosition >= document.body.scrollHeight - 5;

  // Verifica a seção atual
  let current = '';

  // Percorre a lista de seções e verifica se o scroll chegou ao topo de alguma das seções
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollPosition >= sectionTop) {
      current = section.id;
    }
  });

  // Verifica se chegou ao final da página e força a ativação da última seção
  if (pageBottom) {
    current = sections[sections.length - 1].id;
  }

  // Destaca o botão da seção ativa
  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
});
