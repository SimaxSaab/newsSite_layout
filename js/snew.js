const b = document.querySelector('.burger');
const l = document.querySelector('.list');
const m = document.querySelector('.menu-container');

const main = () => {
  b.classList.toggle('active');
  l.classList.toggle('active');
  m.classList.toggle('active');
};

b.addEventListener('click', main);

