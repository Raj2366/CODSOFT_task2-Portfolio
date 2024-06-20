
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

var about = document.querySelector(".about");
var aboutpic = document.querySelector("#aboutpic");

about.addEventListener("mouseover",() => {
	aboutpic.style.width = "100%";
	aboutpic.style.height = "100%";
	aboutpic.style.transition = "all 2s";
	aboutpic.style.opacity = 1;
})

about.addEventListener("mouseout",() => {
	aboutpic.style.width = "10px";
	aboutpic.style.height = "10px";
	aboutpic.style.transition = "all 2s";
	aboutpic.style.opacity = 0;
})

var services = document.querySelector(".services");
var servicepic = document.querySelector("#servicepic");

services.addEventListener("mouseover",() => {
	servicepic.style.width = "100%";
	servicepic.style.height = "100%";
	servicepic.style.transition = "all 2s";
	servicepic.style.opacity = 1;
	console.log("hello")
})

services.addEventListener("mouseout",() => {
	servicepic.style.width = "10px";
	servicepic.style.height = "10px";
	servicepic.style.transition = "all 2s";
	servicepic.style.opacity = 0;
})

