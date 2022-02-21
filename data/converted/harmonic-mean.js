// https://en.wikipedia.org/wiki/Harmonic_mean
// FiveThirtyEight uses the harmonic mean to calculate match quality
// It is not provided in the raw csv data, so we calculate it here

function harmonicMean (x, y) {
  return arguments.length / ((1/x) + (1/y));
}

const myArr = [
  {
    "season": "2019",
    "date": "2019-03-01",
    "league_id": "1979",
    "league": "Chinese Super League",
    "team1": "Shandong Luneng",
    "team2": "Guizhou Renhe",
    "spi1": "48.22",
    "spi2": "37.83",
    "prob1": "0.5755",
    "prob2": "0.174",
    "probtie": "0.2505",
    "proj_score1": "1.75",
    "proj_score2": "0.84",
    "importance1": "45.9",
    "importance2": "22.1",
    "score1": "1",
    "score2": "0",
    "xg1": "1.39",
    "xg2": "0.26",
    "nsxg1": "2.05",
    "nsxg2": "0.54",
    "adj_score1": "1.05",
    "adj_score2": "0"
  },
  {
    "season": "2019",
    "date": "2019-03-01",
    "league_id": "1979",
    "league": "Chinese Super League",
    "team1": "Shanghai Greenland",
    "team2": "Shanghai SIPG",
    "spi1": "39.81",
    "spi2": "60.08",
    "prob1": "0.2387",
    "prob2": "0.5203",
    "probtie": "0.241",
    "proj_score1": "1.22",
    "proj_score2": "1.89",
    "importance1": "25.6",
    "importance2": "63.4",
    "score1": "0",
    "score2": "4",
    "xg1": "0.57",
    "xg2": "2.76",
    "nsxg1": "0.8",
    "nsxg2": "1.5",
    "adj_score1": "0",
    "adj_score2": "3.26"
  }
]

function addMatchQuality (arr) {
  arr.forEach(match => {
    const quality = harmonicMean(match["spi1"], match["spi2"]);
    match["quality"] = quality;
  })
}

addMatchQuality(myArr);
console.log(myArr);
