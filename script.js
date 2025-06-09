'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



///////////////////////////////////
///////////////////////////////////
/*
// Selecting elements
console.log(document.documentElement)
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('.section');
console.log(allsections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
})

// styles 
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log('current scroll (x/Y)', window.pageXOffset, window.pageYOffset)

// console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth);

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// })
section1.scrollIntoView({behavior: 'smooth'});
});

// Adding event listerners

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function(e){
  
// })

// h1.onmouseenter = function(e){
// alert('You are reading the heading')
// };

// Alerts of mouseenter
/*
const alertH1 = function(e) {
  alert('You are reading this heading');
  
};

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);
*/
/*
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColer(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget)
  console.log(e.currentTarget === this)

  // stop progration
  e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
   console.log('CONTAINER', e.target, e.currentTarget)
  console.log(e.currentTarget === this)
})

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
   console.log('NAV', e.target, e.currentTarget)
  console.log(e.currentTarget === this)
}, true);

*/
// const allNavLinks = document.querySelectorAll('.nav__link');

// allNavLinks.forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: "smooth"});
//   })
// })

const allNavLink = document.querySelector('.nav__link');

allNavLink.addEventListener('click', function (e){
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
     const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
})

// Tap component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));
tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
if(!clicked) return;

tabs.forEach(t => t.classList.remove('operations__tab--active'));
tabsContent.forEach(c => c.classList.remove('operations__content--active'))

// Active tabe
clicked.classList.add('operations__tab--active');

  // Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})


// Menu fade animation
const handlehover = function(e){
 if (e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblins = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblins.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.syle.opacity = this;
  }
};

// anothr option
nav.addEventListener('mouseover', handlehover.bind(0.5));

nav.addEventListener('mouseout', handlehover.bind(1));

// Sticky navigation
const initialCords = section1.getBoundingClientRect();
window.addEventListener('scroll', function(){
if(this.window.scrollY > initialCords.top) nav.classList.add('sticky');
else nav.classList.remove('sticky');
})

// another option
// nav.addEventListener('mouseover', function(e){
//  handlehover(e, 0.5);
// } );

// nav.addEventListener('mouseout', function(e){
//  handlehover(e, 1);
// });


/*
// Going downward child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes)
console.log(h1.children);
h1.firstElementChild.style.color = 'White';
h1.lastElementChild.style.color = 'orangered'

// Going Upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
*/