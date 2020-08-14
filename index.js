particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

const burger = document.querySelector('.burger-container');
burger.addEventListener('click', () => {
  const lineOne = document.querySelector('.line-one');
  const lineTwo = document.querySelector('.line-two');
  const lineThree = document.querySelector('.line-three');
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('mobile-menu-open');
  lineTwo.classList.toggle('hide');
  lineOne.classList.toggle('one');
  lineThree.classList.toggle('three');
  burger.classList.toggle('open');
});
