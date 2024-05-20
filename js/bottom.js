$(document).ready(function () {
  $(".btn-primary").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#bottom").offset().top,
      },
      "slow"
    );
  });
});
