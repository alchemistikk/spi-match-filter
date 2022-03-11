/*
  This program takes in the JSON array of match objects,
  adds to each match the computed values: quality, importance, and
  match_rating, and then exports the array as the variable data
*/

let data = require("./data/converted/spi_matches_latest.json");

// I'm not currently interested in results from the Women's Leagues.
// This may change in the future
function removeWomensLeagues (data) {
  let filtered = [];
  data.forEach(match => {
    if (!match["league"].match("Women")) {
      filtered.push(match);
    }
  })
  return filtered;
}

function addValuesToArr (arr) {
  arr.forEach(match => {
    addQuality(match);
    addImportance(match);
    addMatchRating(match);
  })
}

function addQuality (match) {
  match["quality"] = harmonicMean(match["spi1"], match["spi2"]);
}

// If each team both teams have an importance rating for the match
// then average the two ratings. If not, return an overall importance
// rating of 50. Eventually I will build a more complicated way of 
// assigning the overall importance to a match
function addImportance (match) {
  match["importance"] = (+match["importance1"] + +match["importance2"]) / 2;
  if (match["importance"] === 0) {
    match["importance"] = 50; 
  }
}

function addMatchRating (match) {
  match["match_rating"] = (match["quality"] + match["importance"]) / 2;
}

// https://en.wikipedia.org/wiki/Harmonic_mean
// FiveThirtyEight uses the harmonic mean to calculate match quality
// It is not provided in the raw csv data, so we calculate it here

function harmonicMean (x, y) {
  return arguments.length / ((1/x) + (1/y));
}

addValuesToArr(data);
let matchData = removeWomensLeagues(data);

export default matchData;
