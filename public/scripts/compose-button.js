$(function() {

  //When compose button is clicked tweet compose area slides up or down. Textarea is focused on.
  $("#compose").on("click", function(){
    $(".new-tweet").slideToggle()
    $("textarea").focus();
  })

})

