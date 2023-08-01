const navItems = document.querySelectorAll(".nav-item");
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});

