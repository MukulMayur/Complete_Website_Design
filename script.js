let menu = document.getElementById("menu");
let sidenav = document.getElementById("side-nav");
let cross = document.getElementById("cross");

sidenav.style.right = "-250px";
menu.onclick = function () {
  sidenav.style.right = "0";
  cross.style.display = "block";
  menu.style.display = "none";
};

cross.onclick = function () {
  sidenav.style.right = "-250px";
  cross.style.display = "none";
  menu.style.display = "block";
};

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
