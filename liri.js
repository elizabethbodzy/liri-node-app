//Require .env file
require('dotenv').config();

//Require request
var request = require('request');

//Require moment
var moment = require('moment');

//Require file systems
var fs = require('fs');

//Require axios
var axios = require("axios");

//Link keys
var keys = require('./keys.js');

//Initialize spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Omdb and Bands In Town
// var obdbKey = keys.omdb;
// var bandsInTown = keys.bandsInTown








var omdbKey = 



axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });