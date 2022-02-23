import data from "./match-data";

let onlyFutureMatches = [];

function getFutureMatches (matches) {
  matches.forEach(match => { 
    const matchday = new Date(match["date"]);
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1); // Not sure yet how these methods work, but they are a solution to the problem
    if (matchday > yesterday) {
      onlyFutureMatches.push(match);
    }
  });
}

getFutureMatches(data);

export default onlyFutureMatches;
