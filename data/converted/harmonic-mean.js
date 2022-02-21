let data = require("./spi_matches_latest.json");

function addValuesToArr (arr) {
  arr.forEach(match => {
    addQuality(match);
    addImportance(match);
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

// https://en.wikipedia.org/wiki/Harmonic_mean
// FiveThirtyEight uses the harmonic mean to calculate match quality
// It is not provided in the raw csv data, so we calculate it here

function harmonicMean (x, y) {
  return arguments.length / ((1/x) + (1/y));
}


addValuesToArr(data);
console.log(data);
