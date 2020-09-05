$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".phone-menu").toggleClass("show");
  });
});

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
});
