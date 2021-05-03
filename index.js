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

// const navLinks = document.querySelectorAll(".nav-link");
// const menuToggle = document.getElementById("navbarNavAltMarkup");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     $(menuToggle).collapse("toggle");
//   });
// });
