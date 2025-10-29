let mainIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);
let btn = document.querySelector(".btn.sub");

mainIcon.onclick = () => {
    mainIcon.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
}

btn.addEventListener("click",() => {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let number = document.querySelector(".num");
    let sub = document.querySelector(".sub");
    let msg = document.querySelector(".msg");

    let url = `https://wa.me/201060496849?text=
    My Name Is: ${name}%0A
    My Email Is: ${email}%0A
    My Phone Number Is: ${number}%0A
    I'm: ${sub}%0A
    Message: ${msg}`;

    window.open(url , "_blank")
    name.value = "";
    email.value = "";
    number.value = "";
    sub.value = "";
    msg.value = "";
});