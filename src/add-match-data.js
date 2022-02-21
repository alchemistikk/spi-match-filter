let data = require("./data/converted/spi_matches_latest.json");

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

function addImportance (match) {
  match["importance"] = 
    (parseFloat(match["importance1"]) + 
    (parseFloat(match["importance2"]))) /
    2;
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
// var json = JSON.stringify(data);
// var fs = require('fs');
// fs.writeFile('full_match_data.json', json, err => {
//   if (err) {
//     console.error(err);  
//     return; 
//   };
//   console.log("File has been created");
// });

export default data;
