const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');

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

// Event Listeners
menuBars.addEventListener('click', toggleMenu);