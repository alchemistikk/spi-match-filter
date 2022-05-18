import onlyFutureMatches from './get-future-matches';

let bestMatches = onlyFutureMatches.filter(match => match["match_rating"] > 75);

bestMatches.sort((a, b) => a["date"] - b["date"]);

let bestThreeMatches = bestMatches.slice(0,3);

export default bestThreeMatches;
