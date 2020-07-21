/* Adapted from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp and https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */

window.onscroll = function () {
  stick();
  stickMobile();
};

var navbar = document.getElementById("navbar");
var navbarMobile = document.getElementById("navbarMobile");
var sticky = navbar.offsetTop - 40;
var stickyMobile = navbarMobile.offsetTop - 40;

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function stickMobile() {
  if (window.pageYOffset >= stickyMobile) {
    navbarMobile.classList.add("sticky");
  } else {
    navbarMobile.classList.remove("sticky");
  }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburger() {
  var x = document.getElementById("mobileLinks");
  console.log(x);
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}
