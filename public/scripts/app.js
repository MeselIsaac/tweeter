/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//
$(function() {


function createTweetElement(tweet) {
  let $tweets = $("<article class='tweets'>")

  let $img = $("<img class='icon' src="+tweet.user.avatars.regular+">");
  let $h2 = $("<h2>").text(tweet.user.name);
  let $h3 = $("<h3>").text(tweet.user.handle);
  let $div = $("<div>").text(tweet.content.text);
  let $p2 = $("<p>").text(tweet.created_at);
  let $img1= $("<img class='retweet' src='/images/retweet.png'>")

  let $header = $("<header>").append($img).append($h2).append($h3).append($div);
  let $footer = $("<footer>").append($p2).append($img1)

  $tweets.append($header).append($footer);

  return $tweets;
}




function renderTweets(array) {
  for (tweet of array) {
    $("#tweet-container").prepend((createTweetElement(tweet)))

  }

}


function loadTweets() {
  $.ajax("/tweets", {method: "GET"})
  .then(function(arrayOfTweets) {
    renderTweets(arrayOfTweets);
  })

}

loadTweets()

$("form").submit(function(event) {
        event.preventDefault()
      })

var form = $("form");
form.on("submit", function() {
  if (!$("textarea").val()) {
    alert("Please compose message before submitting your tweet");
  } else if ($("textarea").val().length > 140) {
    alert(`Exceeded character limit by ${$("textarea").val().length - 140}`)
  } else {
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

    }))
  }
})
})


