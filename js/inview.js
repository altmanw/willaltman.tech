/* Adapted from https://stackoverflow.com/questions/47793841/update-navbar-when-user-scrolls */

var selector = "#nav-animation";

//Update the position of the red highlight
$(window).scroll(function () {
  if ($("anim").hasClass("start-home")) {
    $(selector).css({ width: "156px", left: "0" });
  } else if ($("anim").hasClass("start-about")) {
    $(selector).css({ width: "148px", left: "154px" });
  } else if ($("anim").hasClass("start-projects")) {
    $(selector).css({ width: "178px", left: "300px" });
  } else if ($("anim").hasClass("start-resume")) {
    $(selector).css({ width: "190px", left: "480px" });
  }
});

//Detect where we are in the current scroll window, and update hover effects and higlight position class
$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    var sec1 = $(".section1").offset().top - 100;
    var sec2 = $(".section2").offset().top - 100;
    var sec3 = $(".section3").offset().top - 100;
    var sec4 = $(".section4").offset().top - 100;

    if (windscroll >= 0) {
      $(selector).addClass("start-home");
      $(".btn1").addClass("btn-current");
    } // do not remove this class

    if (windscroll >= sec2) {
      $(selector).addClass("start-about");

      $(selector).removeClass("start-home");
      $(selector).removeClass("start-projects");
      $(selector).removeClass("start-resume");

      $(".btn2").addClass("btn-current");
      $(".btn1").removeClass("btn-current");
      $(".btn3").removeClass("btn-current");
      $(".btn4").removeClass("btn-current");
    } else {
      $(selector).removeClass("start-about");
      $(".btn2").removeClass("btn-current");
    }

    if (windscroll >= sec3) {
      $(selector).addClass("start-projects");

      $(selector).removeClass("start-home");
      $(selector).removeClass("start-about");
      $(selector).removeClass("start-resume");

      $(".btn3").addClass("btn-current");
      $(".btn1").removeClass("btn-current");
      $(".btn2").removeClass("btn-current");
      $(".btn4").removeClass("btn-current");
    } else {
      $(selector).removeClass("start-projects");
    }

    if (windscroll >= sec4) {
      $(selector).addClass("start-resume");

      $(selector).removeClass("start-home");
      $(selector).removeClass("start-about");
      $(selector).removeClass("start-projects");

      $(".btn4").addClass("btn-current");
      $(".btn1").removeClass("btn-current");
      $(".btn2").removeClass("btn-current");
      $(".btn3").removeClass("btn-current");
    } else {
      $(selector).removeClass("start-resume");
      $(".btn4").removeClass("btn-current");
    }
  })
  .scroll();
