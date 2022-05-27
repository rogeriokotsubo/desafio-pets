//Creditos: CodingLab

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

let lojaArrow = document.querySelector(".loja-sub-menu");
lojaArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let atendimentoArrow = document.querySelector(".atendimento-sub-menu");
atendimentoArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
