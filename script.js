let mainIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

mainIcon.onclick = () => {
    mainIcon.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
}