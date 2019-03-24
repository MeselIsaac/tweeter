"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      // var result = []
      console.log(newTweet);
        db.collection("tweets").insertOne( newTweet ,(err, newTweet) =>{
          if (err) throw err;
          console.log("posting tweet")
          callback(null, newTweet);
        });
      },



    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) throw err;
        console.log("Logging each tweet:");
        callback(null, tweets)
      });
    }

  };
}


   // , function(err, r) {
   //        assert.equal(null, err);
   //        assert.equal(1, r.insertedCount);


   // saveTweet: function(newTweet, callback) {
   //   // console.log(newTweet)
   //   var result = []
   //   db.collection('tweets').insertOne(newTweet).then((result) => {
   //     callback('ok',result);
   //   })
   //   .catch((err) => {
   //     callback('err',err);
   //   })
   // },