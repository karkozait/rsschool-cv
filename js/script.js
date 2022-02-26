const checkWindowSize = () => {
    window.addEventListener('resize', function () {
        let clientWidth = window.innerWidth;
        addBurgerMenu(clientWidth)
    }, true);
}

checkWindowSize()

const addBurgerMenu = (width) => {
    let burger = document.querySelector('.burger__menu');
    let menu = document.querySelector('.header__menu');
    if (width <= 660 && !menu.classList.contains('header__menu__open')) {
        burger.style.display = "block"
    } else {
        burger.style.display = "none"
    }

}

document.querySelector('.burger__menu').addEventListener('click', function () {
    let menu = document.querySelector('.header__menu');
    this.style.display = 'none';
    menu.style.visibility = 'visible';
    menu.classList.add('header__menu__open');
})

document.querySelectorAll('.header__menu__item').forEach(item => item.addEventListener('click', (e) => {
    let clientWidth = window.innerWidth;
    let menu = document.querySelector('.header__menu');
    menu.style.visibility = 'hiden';
    menu.classList.remove('header__menu__open');
    addBurgerMenu(clientWidth)
}))


