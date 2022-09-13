const btn = document.getElementById("menu");
const nav = document.getElementById("menu-list");

btn.classList.remove("open");

btn.addEventListener("click", function(){
    this.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});

const reviews = [
    {
        id: 1,
        image: "images/woman-1.png",
        name: "Mikasa",
        text: "\"Red Syndicate has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.\""
    },
    {
        id: 2,
        image: "images/woman-2.png",
        name: "Makima",
        text: "\"We have been able to cancel so many subscriptions since using Red Syndicate. There is no more cross-channel confusion and everyone is much more focussed.\""
    },
    {
        id: 3,
        image: "images/woman-3.png",
        name: "Emily",
        text: "\"This is the most productive experience that our team has ever experienced. We love the massive amount of features that Red Syndicate provides.\""
    }
];

var image = document.querySelector('.person-img');
var personName = document.querySelector('.person-name');
var text = document.querySelector('.review-para');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

var currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson(currentItem) {
    var item = reviews[currentItem];
    image.setAttribute("src", item.image);
    personName.innerHTML = item.name;
    text.innerHTML = item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})