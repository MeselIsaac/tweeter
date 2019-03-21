/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
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


// console.log($tweet)
// console.log("test")

function renderTweets(array) {
  for (tweet of array) {
    $("#tweet-container").append(createTweetElement(tweet));
  }

}

renderTweets(data);

})

// Define another function renderTweets in the same file. This function can be responsible for taking in an array of tweet objects and then appending each one to the #tweets-container. In order to do this, the renderTweets will need to leverage the createTweetElement function you wrote earlier by passing to it the tweet object, using the returned jQuery object by appending it to the #tweets-container section.

// By the end of this task, your app.js will look something like this:

