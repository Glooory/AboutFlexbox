const menuToggle = document.querySelector('.toggleNav');
const menuList = document.querySelector('.flex-nav ul');

function toggleMenu(e) {
    menuList.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleMenu);