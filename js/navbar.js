/* Adapted from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp and https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */

window.onscroll = function () {
  stick();
  stickMobile();
};

/* TODO: Update variables based on width resizing */
var navbar = document.getElementById("navbar");
var navbarMobile = document.getElementById("navbarMobile");
var sticky = navbar.offsetTop - 40;
var stickyMobile = navbarMobile.offsetTop;

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
  var b = document.getElementsByClassName("btn2-mobile");
  var c = document.getElementsByClassName("btn3-mobile");
  var d = document.getElementsByClassName("btn4-mobile");

  if (x.style.visibility === "visible") {
    $(b).css({ transition: "0s" });
    $(c).css({ transition: "0s" });
    $(d).css({ transition: "0s" });
    x.style.visibility = "hidden";
  } else {
    $(b).css({ transition: "0.5s" });
    $(c).css({ transition: "0.5s" });
    $(d).css({ transition: "0.5s" });
    x.style.visibility = "visible";
  }
}
