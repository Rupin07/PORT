// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Project carousel
const scroller = document.getElementById('carousel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const updateArrows = () => {
  leftBtn.disabled = scroller.scrollLeft <= 4;
  const maxScroll = scroller.scrollWidth - scroller.clientWidth - 4;
  rightBtn.disabled = scroller.scrollLeft >= maxScroll;
};

const cardWidth = () => scroller.querySelector('.card')?.offsetWidth || 280;

leftBtn.addEventListener('click', () => {
  scroller.scrollBy({ left: -cardWidth() - 18, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  scroller.scrollBy({ left: cardWidth() + 18, behavior: 'smooth' });
});

scroller.addEventListener('scroll', updateArrows, { passive: true });
window.addEventListener('resize', updateArrows);
updateArrows();
