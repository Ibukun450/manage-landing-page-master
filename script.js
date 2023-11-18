const logoButton = document.getElementById('logo');

const mobileNavBar = document.getElementById('navbar');

let isMenuOpen = false;


function closeMenu() {
    logoButton.src = 'images/icon-hamburger.svg';
    mobileNavBar.style.display = 'none';
    isMenuOpen = false;
}

logoButton.addEventListener('click', function () {
    if (isMenuOpen)
     {
        mobileNavBar.style.display = 'none';
        logoButton.src = 'images/icon-hamburger.svg';
    } else {
        mobileNavBar.style.display = 'flex';
        logoButton.src = 'images/icon-close.svg';
    }

isMenuOpen = !isMenuOpen;
});

function closeMenuOnResize() {
    if (window.innerWidth >= 1026 && isMenuOpen) {
        closeMenu();
    }
}

window.addEventListener('resize', closeMenuOnResize);