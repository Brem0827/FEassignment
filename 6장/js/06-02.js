const btnmenu = document.getElementById('menu');
const nav = document.getElementById('nav');

btnmenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  btnmenu.classList.toggle('active');
});