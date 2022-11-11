// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm
// $(document).ready(function() {
//   var $element1 = $('#dot1');
//   var $element2 = $("#dot2");
//   var $element3 = $("#dot3");
//   var $element4 = $("#dot4");

//   function fadeInOut() {

//     $element1.fadeIn('fast', function() {
//       $element1.delay(3000).fadeOut('slow', function() {
//         $element1.fadeIn('fast', function() {
//           setTimeout(fadeInOut, 5);
//         });
//       });
//     });

//     $element2.fadeIn('fast', function() {
//       $element2.delay(2950).fadeOut('slow', function() {
//         $element2.fadeIn('fast', function() {      
//         });
//       });
//     });
  

//   };

//   fadeInOut();

//   /* Progress Bar Animation */
//   $(".progress-bar").animate({
//     width: "100%"
//   }, 2500);

// });

let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that. 
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`)

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show')
          dropdownIsOpen = false
        } else {
          target.classList.add('show')
          dropdownIsOpen = true
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
      let targetIsDropdown = dropdown == event.target

      if (dropdownButton == event.target) {
        return
      }

      if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
        dropdown.classList.remove('show')
      }
    })
  }
})

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
    let navbarMenu = document.querySelector('.navbar-menu')

    if (navbarMenu.style.display === 'flex') {
      navbarMenu.style.display = 'none'
      return
    }

    navbarMenu.style.display = 'flex'
  })
}


// $(document).ready(function() {
//   $("#news-slider").owlCarousel({
//       items : 3,
//       itemsDesktop:[1199,3],
//       itemsDesktopSmall:[980,2],
//       itemsMobile : [600,1],
//       navigation:true,
//       navigationText:["",""],
//       pagination:true,
//       autoPlay:true
//   });
// });

handleSmallScreens()