/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//
$(function() {

  //Displays error message if textarea is empty is trying to send a tweet.
  function isTweetEmpty() {
    if (!$("textarea").val()) {
      $("#error").slideUp();
      setTimeout(function () {
        $("#error").text("Please compose message before submitting your tweet.").slideDown();
      }, 500);
      return true;
    }
    return false;
  }

  //Displays error message if textarea contains over 140 characters when trying to send tweet.
  function isTweetTooBig() {
    if ($("textarea").val().length > 140) {
      $("#error").slideUp();
      setTimeout(function () {
        $("#error").text(`Exceeded character limit by ${$("textarea").val().length - 140}`).slideDown();
      }, 500);
      return true;
    }
    return false;
  }

  //Function creates HTML tags containing tweet information that was just sent.
  function createTweetElement(tweet) {
    let $tweets = $("<article class='tweets'>");
    let $img = $("<img class='icon' src="+tweet.user.avatars.regular+">");
    let $h2 = $("<h2>").text(tweet.user.name);
    let $h3 = $("<h3>").text(tweet.user.handle);
    let $div = $("<div>").text(tweet.content.text);
    let $p2 = $("<p>").text(tweet.created_at);
    let $img1= $("<img id='retweet' src='/images/retweet-icon.png'>");
    let $img2= $("<img id='heart' src='/images/heart-icon.png'>");
    let $img3= $("<img id='flag' src='/images/flag-icon.png'>");
    let $header = $("<header>").append($img).append($h2).append($h3).append($div);
    let $footer = $("<footer>").append($p2).append($img1).append($img2).append($img3);

    $tweets.append($header).append($footer);

    return $tweets;
  }

  //Function that attaches every newly generate HTML tags to "tweet-container" section in HTML
  function renderTweets(array) {
    for (tweet of array) {
      $("#tweet-container").prepend((createTweetElement(tweet)));
    }
  }

  //Loads tweets upon request
  function loadTweets() {
    $.ajax("/tweets", {method: "GET"})
    .then(function(arrayOfTweets) {
      renderTweets(arrayOfTweets);
    })
  }

  //Load and display tweets already contained in Database
  loadTweets()

  //Disable tweet button's default action
  $("form").submit(function(event) {
    event.preventDefault();
  })

  //Asynchronous request for posting and retrieving tweets.
  var form = $("form");
  form.on("submit", function() {
    isTweetEmpty();
    isTweetTooBig();

    if (isTweetEmpty() === false && isTweetTooBig() === false) {
      $("#error").slideUp();
      setTimeout(function () {
        $.ajax({
          url: "/tweets",
          type: "POST",
          data: $("textarea").serialize()
        })
        .then($.ajax("/tweets", {method: "GET" }).then(function(displayTweets){
          $("#tweet-container").children().remove();
          loadTweets();
          $("textarea").val('');
          $(".counter").text(140);
          return false;
        }))
      }, 500)
    }
  })
})




