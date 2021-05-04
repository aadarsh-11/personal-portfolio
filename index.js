$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function () {
  $(".skillbar").each(function () {
    $(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: $(this).attr("data-percent"),
        },
        1000
      );
  });
});

if ($(window).width() <= 768) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((l) => {
    $(l).click(function () {
      setTimeout(function () {
        $(".navbar-toggler").trigger("click");
      }, 1000);
    });
  });
}
// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((l) => {
//   $(l).click(function () {
//     setTimeout(function () {
//       $(".navbar-toggler").trigger("click");
//     }, 1000);
//   });
// });

$(document).on("scroll", onScroll);

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".navbar-nav a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top - refElement.height() / 8 <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".navbar-nav a").removeClass("active");
      currLink.addClass("active");
    }
  });
}
