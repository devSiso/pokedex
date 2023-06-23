const carouselItems = Array.from(document.querySelectorAll('.home-page__carousel-item')) as HTMLElement[];
const itemHeight = carouselItems[0].offsetHeight;

let currentItemIndex = 0;
let currentNavigatorIndex = 1;

function moveNext() {
  const carouselContainer = document.querySelector('.home-page__carousel-items') as HTMLElement;
  const navigationDots = document.querySelectorAll('.home-page__carousel-navigation-dot');

  navigationDots.forEach(dot => dot.classList.remove('--active'));
  navigationDots[currentNavigatorIndex].classList.add('--active');

  const clonedItem = carouselItems[currentItemIndex % carouselItems.length].cloneNode(true) as Node;
  carouselContainer.append(clonedItem);
  currentItemIndex++;

  currentNavigatorIndex = (currentNavigatorIndex + 1) % navigationDots.length;

  carouselContainer.style.transform = `translateY(-${itemHeight * currentItemIndex}px)`;
}

setInterval(moveNext, 5000);

