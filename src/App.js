import "./App.css";
import React from "react";
import bestThreeMatches from "./best-matches";

function BestUpcomingMatches(props) {
  const listItems = props.data.map((match) => (
    <div>
      <div>
        <p>{match["date"]}</p>
      </div>
      <div className="bestUpcomingMatchTeams">
        <p>{match["team1"] + " v " + match["team2"]}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Best Upcoming Matches</h2>
      <p>{listItems}</p>
    </div>
  );
}

function TableBody(props) {
  const listItems = props.data.map((match) => (
    <tr key={props.data.indexOf(match)}>
      <td>{match["date"]}</td>
      <td>{match["league"]}</td>
      <td>{match["team1"]}</td>
      <td>{match["team2"]}</td>
      <td
        className={
          match["quality"] > 66
            ? "great"
            : match["quality"] > 33
            ? "good"
            : "poor"
        }
      >
        {Math.round(match["quality"])}
      </td>
      <td
        className={
          match["importance"] > 66
            ? "great"
            : match["importance"] > 33
            ? "good"
            : "poor"
        }
      >
        {Math.round(match["importance"])}
      </td>
      <td
        className={
          match["match_rating"] > 66
            ? "great rate"
            : match["match_rating"] > 33
            ? "good rate"
            : "poor rate"
        }
      >
        {Math.round(match["match_rating"])}
      </td>
    </tr>
  ));

  return <tbody>{listItems}</tbody>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.matches,
      match_rating: 0,
      quality: 0,
      importance: 0,
      team: "",
      league: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleQuality(event, threshold) {
    this.props.matches.forEach((match) => {
      if (
        match["quality"] > event.target.value &&
        match["match_rating"] > this.state.match_rating &&
        match["importance"] > this.state.importance &&
        match["league"].match(this.state.league) &&
        (match["team1"].match(this.state.team) ||
          match["team2"].match(this.state.team))
      ) {
        threshold.push(match);
      }
    });
  }

  handleImportance(event, threshold) {
    this.props.matches.forEach((match) => {
      if (
        match["importance"] > event.target.value &&
        match["match_rating"] > this.state.match_rating &&
        match["quality"] > this.state.quality &&
        match["league"].match(this.state.league) &&
        (match["team1"].match(this.state.team) ||
          match["team2"].match(this.state.team))
      ) {
        threshold.push(match);
      }
    });
  }

  handleMatchRating(event, threshold) {
    this.props.matches.forEach((match) => {
      if (
        match["match_rating"] > event.target.value &&
        match["quality"] > this.state.quality &&
        match["importance"] > this.state.importance &&
        match["league"].match(this.state.league) &&
        (match["team1"].match(this.state.team) ||
          match["team2"].match(this.state.team))
      ) {
        threshold.push(match);
      }
    });
  }

  handleTeam(event, threshold) {
    this.props.matches.forEach((match) => {
      if (
        (match["team1"].match(event.target.value) ||
          match["team2"].match(event.target.value)) &&
        match["match_rating"] > this.state.match_rating &&
        match["quality"] > this.state.quality &&
        match["importance"] > this.state.importance &&
        match["league"].match(this.state.league)
      ) {
        threshold.push(match);
      }
    });
  }

  handleLeague(event, threshold) {
    this.props.matches.forEach((match) => {
      if (
        match["league"].match(event.target.value) &&
        match["match_rating"] > this.state.match_rating &&
        match["quality"] > this.state.quality &&
        match["importance"] > this.state.importance &&
        (match["team1"].match(this.state.team) ||
          match["team2"].match(this.state.team))
      ) {
        threshold.push(match);
      }
    });
  }

  handleInput(event) {
    let threshold = [];
    if (event.target.name === "match_rating") {
      this.handleMatchRating(event, threshold);
      this.setState({ match_rating: event.target.value });
    } else if (event.target.name === "quality") {
      this.handleQuality(event, threshold);
      this.setState({ quality: event.target.value });
    } else if (event.target.name === "importance") {
      this.handleImportance(event, threshold);
      this.setState({ importance: event.target.value });
    } else if (event.target.name === "team") {
      this.handleTeam(event, threshold);
      this.setState({ team: event.target.value });
    } else if (event.target.name === "league") {
      this.handleLeague(event, threshold);
      this.setState({ league: event.target.value });
    }
    this.setState({ table: threshold });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="nonTable">
            <h1>Soccer Power Index Match Filter</h1>
            <div className="inputs">
              <label>League</label>
              <input
                name="league"
                type="search"
                onInput={this.handleInput}
              ></input>
              <label>Team</label>
              <input
                name="team"
                type="search"
                onInput={this.handleInput}
              ></input>
              <label>Quality</label>
              <input
                name="quality"
                type="range"
                min="0"
                max="100"
                onInput={this.handleInput}
              ></input>
              <label>Importance</label>
              <input
                name="importance"
                type="range"
                min="0"
                max="100"
                onInput={this.handleInput}
              ></input>
              <label>Match Rating</label>
              <input
                name="match_rating"
                type="range"
                min="0"
                max="100"
                onInput={this.handleInput}
              ></input>
            </div>
            <div className="nonInput">
              <p>
                Filter upcoming league soccer matches by quality, importance,
                and rating.
              </p>
              <p>Optionally search for teams and leagues.</p>
              <p>
                Raw data from{" "}
                <a href="https://data.fivethirtyeight.com/#soccer-spi">
                  fivethirtyeight.com
                </a>
                . Calculated data programmed by me.
              </p>
              <p>
                *Importance rating is sometimes not calculated until a week or
                so before the match. Until then a value of 50 is assigned.
              </p>
              <BestUpcomingMatches data={bestThreeMatches} />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>League</th>
                <th>Home</th>
                <th>Away</th>
                <th>Quality</th>
                <th>Importance</th>
                <th>Match Rating</th>
              </tr>
            </thead>
            <TableBody data={this.state.table} />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
