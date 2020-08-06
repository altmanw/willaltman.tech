/* Adapted from https://stackoverflow.com/questions/47793841/update-navbar-when-user-scrolls */

var selector = "#nav-animation-mobile";

//Detect where we are in the current scroll window, and update hover effects and higlight position class
$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    var sec2 = $(".section1").offset().top - 200;
    var sec3 = $(".section2").offset().top - 125;
    var sec4 = $(".section3").offset().top - 250;

    if (windscroll >= 0) {
      $(selector).addClass("start-home");
      $(".btn1-mobile").addClass("btn-current-mobile");
    } // do not remove this class

    if (windscroll >= sec2) {
      $(selector).addClass("start-about");

      $(selector).removeClass("start-home");
      $(selector).removeClass("start-projects");
      $(selector).removeClass("start-resume");

      $(".btn2-mobile").addClass("btn-current-mobile");
      $(".btn3-mobile").removeClass("btn-current-mobile");
      $(".btn1-mobile").removeClass("btn-current-mobile");
      $(".btn4-mobile").removeClass("btn-current-mobile");
    } else {
      $(selector).removeClass("start-about");
      $(".btn2-mobile").removeClass("btn-current-mobile");
    }

    if (windscroll >= sec3) {
      $(selector).addClass("start-projects");

      $(selector).removeClass("start-home");
      $(selector).removeClass("start-about");
      $(selector).removeClass("start-resume");

      $(".btn3-mobile").addClass("btn-current-mobile");
      $(".btn1-mobile").removeClass("btn-current-mobile");
      $(".btn2-mobile").removeClass("btn-current-mobile");
      $(".btn4-mobile").removeClass("btn-current-mobile");
    } else {
      $(selector).removeClass("start-projects");
      $(".btn3-mobile").removeClass("btn-current-mobile");
    }

    if (windscroll >= sec4) {
      $(selector).addClass("start-resume");

      $(selector).removeClass("start-home");
      $(selector).removeClass("start-about");
      $(selector).removeClass("start-projects");

      $(".btn4-mobile").addClass("btn-current-mobile");
      $(".btn1-mobile").removeClass("btn-current-mobile");
      $(".btn2-mobile").removeClass("btn-current-mobile");
      $(".btn3-mobile").removeClass("btn-current-mobile");
    } else {
      $(selector).removeClass("start-resume");
      $(".btn4-mobile").removeClass("btn-current-mobile");
    }
  })
  .scroll();
