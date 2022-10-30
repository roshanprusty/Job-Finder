$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});
// Testimonal Slider

const testTrack = document.querySelector('.test-card-track');
const testSlides = Array.from(testTrack.children);
const testNextBtn = document.querySelector('.t-btn_right');
const testPrevBtn = document.querySelector('.t-btn_left');
const testNav = document.querySelector('.t-slider-nav');
const testNavSlides = Array.from(testNav.children);

// Finding the size of our slides

const testSize = testSlides[0].getBoundingClientRect().width;

const testSlidePosition = (testSlide, index) => {
  testSlide.style.left = testSize * index + 'px';
}
testSlides.forEach(testSlidePosition);

// Overall function that the Next/Prev buttons draw from

const testSlideMove = (testTrack, tcurrentSlide, targetSlide) => {
  testTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  tcurrentSlide.classList.remove('t-current-slide');
  targetSlide.classList.add('t-current-slide');
}

const testUpdateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('t-current-slide');
  targetDot.classList.add('t-current-slide');
}

// Next Button

// Next Button
testNextBtn.addEventListener('click', e => {
  const tcurrentSlide = testTrack.querySelector('.t-current-slide');
  const nextSlide = tcurrentSlide.nextElementSibling;
  const currentDot = testNav.querySelector('.t-current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = testSlides.findIndex(testSlide => testSlide === nextSlide);

  testSlideMove(testTrack, tcurrentSlide, nextSlide);
  testUpdateDots(currentDot, nextDot);
  hideShow(testSlides, testNextBtn, testPrevBtn, nextIndex); 
});

// Previous Button

testPrevBtn.addEventListener('click', e => {
  const tcurrentSlide = testTrack.querySelector('.t-current-slide');
  const prevSlide = tcurrentSlide.previousElementSibling;
  const currentDot = testNav.querySelector('.t-current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = testSlides.findIndex(testSlide => testSlide === prevSlide);

  testSlideMove(testTrack, tcurrentSlide, prevSlide);
  testUpdateDots(currentDot, prevDot);
  hideShow(testSlides, testNextBtn, testPrevBtn, prevIndex); 
});

// Slider Dots

testNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if(!targetDot) return;
  
  const tcurrentSlide = testTrack.querySelector('.t-current-slide');
  const currentDot = testNav.querySelector('.t-current-slide');
  const index = testNavSlides.findIndex(testNavSlide => testNavSlide === targetDot)
  const targetSlide = testSlides[index];

  testSlideMove(testTrack, tcurrentSlide, targetSlide);
  testUpdateDots(currentDot, targetDot);
  hideShow(testSlides, testPrevBtn, testNextBtn, index); 

});