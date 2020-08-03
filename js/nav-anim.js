/* Adapted from https://stackoverflow.com/questions/47793841/update-navbar-when-user-scrolls */

var selectorz = "#nav-animation";

//Update the position of the red highlight
$(window).scroll(function () {
  if ($("anim").hasClass("start-home")) {
    $(selectorz).css({ width: "156px", left: "0" });
  } else if ($("anim").hasClass("start-about")) {
    $(selectorz).css({ width: "148px", left: "154px" });
  } else if ($("anim").hasClass("start-projects")) {
    $(selectorz).css({ width: "178px", left: "300px" });
  } else if ($("anim").hasClass("start-resume")) {
    $(selectorz).css({ width: "190px", left: "480px" });
  }
});

//Detect where we are in the current scroll window, and update hover effects and higlight position class
$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    var sec2 = $(".section1").offset().top - 200;
    var sec3 = $(".section2").offset().top - 125;
    var sec4 = $(".section3").offset().top - 100;

    if (windscroll >= 0) {
      $(selectorz).addClass("start-home");
      $(".btn1").addClass("btn-current");
    } // do not remove this class

    if (windscroll >= sec2) {
      $(selectorz).addClass("start-about");

      $(selectorz).removeClass("start-home");
      $(selectorz).removeClass("start-projects");
      $(selectorz).removeClass("start-resume");

      $(".btn2").addClass("btn-current");
      $(".btn1").removeClass("btn-current");
      $(".btn3").removeClass("btn-current");
      $(".btn4").removeClass("btn-current");
    } else {
      $(selectorz).removeClass("start-about");
      $(".btn2").removeClass("btn-current");
    }

    if (windscroll >= sec3) {
      $(selectorz).addClass("start-projects");

      $(selectorz).removeClass("start-home");
      $(selectorz).removeClass("start-about");
      $(selectorz).removeClass("start-resume");

      $(".btn3").addClass("btn-current");
      $(".btn1").removeClass("btn-current");
      $(".btn2").removeClass("btn-current");
      $(".btn4").removeClass("btn-current");
    } else {
      $(selectorz).removeClass("start-projects");
      $(".btn3").removeClass("btn-current");
    }

    if (windscroll >= sec4) {
      $(selectorz).addClass("start-resume");

      $(selectorz).removeClass("start-home");
      $(selectorz).removeClass("start-about");
      $(selectorz).removeClass("start-projects");

      $(".btn4").addClass("btn-current");
      $(".btn1").removeClass("btn-current");
      $(".btn2").removeClass("btn-current");
      $(".btn3").removeClass("btn-current");
    } else {
      $(selectorz).removeClass("start-resume");
      $(".btn4").removeClass("btn-current");
    }
  })
  .scroll();
