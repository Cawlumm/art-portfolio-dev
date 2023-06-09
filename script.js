const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
let slides = document.getElementById('slideshow');
const contextImg = document.querySelector('.context img');
const contextText = document.querySelector('.context .context-text');
const tripImg = document.querySelector('.trips img');
const tripText = document.querySelector('.trips .trips-text');
const img1Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contextImg.classList.add('animate');
        img1Observer.unobserve(entry.target);
      }
    });
  });
  const text1Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contextText.classList.add('animate');
        text1Observer.unobserve(entry.target);
      }
    });
  });
  const img2Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tripImg.classList.add('animate');
        img2Observer.unobserve(entry.target);
      }
    });
  });
  const text2Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tripText.classList.add('animate');
        text2Observer.unobserve(entry.target);
      }
    });
  });
  
// Toggle Menu On and Off
function toggleMenu() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    // Toggle: Menu Active
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        nav1.classList.replace('slide-out-1', 'slide-in-1');
        nav2.classList.replace('slide-out-2', 'slide-in-2');
        nav3.classList.replace('slide-out-3', 'slide-in-3');
        nav4.classList.replace('slide-out-4', 'slide-in-4');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        nav1.classList.replace('slide-in-1', 'slide-out-1');
        nav2.classList.replace('slide-in-2', 'slide-out-2');
        nav3.classList.replace('slide-in-3', 'slide-out-3');
        nav4.classList.replace('slide-in-4', 'slide-out-4');
    }
}

// Function to populate images dynamically into slideshow
function addImages() {
    for (let i = 0; i < imgFiles.length; i++) {
        let img = document.createElement('img');
        img.src = imgFiles[i];
        img.alt = imgAlt[i];
        slides.appendChild(img);
    }
}

// Function for slide show using slick
function slideShow() {
    addImages();
    $('.slideshow').slick({
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
      });
}

// Event Listeners
menuBars.addEventListener('click', toggleMenu);
nav1.addEventListener('click', toggleMenu);
nav2.addEventListener('click', toggleMenu);
nav3.addEventListener('click', toggleMenu);
nav4.addEventListener('click', toggleMenu);
slideShow();

// Observe Listeners to animate context dynamically when reached by user
img1Observer.observe(contextImg);
text1Observer.observe(contextText);
img2Observer.observe(tripImg);
text2Observer.observe(tripText);
