const btn = document.getElementById("menu");
const nav = document.getElementById("menu-list");

btn.classList.remove("open");

btn.addEventListener("click", function(){
    this.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});