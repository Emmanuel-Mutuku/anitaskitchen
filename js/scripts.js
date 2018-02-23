$(document).ready(function() {
  $("#open-menu").click(function() {
    $("aside").animate({
      "left": 0
    }, 2000);
  });
  // closing menu
  $("#close-menu").click(function() {
    $("aside").animate({
      "left": "-100\%"
    }, 2000);
  });
});
