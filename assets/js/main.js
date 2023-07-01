const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

bar.addEventListener("click", () => menu.classList.toggle("show-menu"))

document.addEventListener("scroll", () => window.scrollY > 456 ? nav.classList.add("bg-nav") : nav.classList.remove("bg-nav"))