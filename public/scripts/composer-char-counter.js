$(function() {


  function charCounter (event) {
    let num = 140;
    let countdown = num - $(this).val().length;
    if (countdown < 0) {
      $(".counter").text(countdown).css("color", "red");
    } else if (countdown >= 0) {
      $(".counter").text(countdown).css("color", "#244751");
    }
  }

  $("textarea").on("input", charCounter);

});



