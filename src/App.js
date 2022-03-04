import logo from './logo.svg';
import './App.css';
import React from 'react';

function TableBody(props) {
  const listItems = props.data.map(match =>
    <tr>
    <td>{match["date"]}</td>
    <td>{match["league"]}</td>
    <td>{match["team1"]}</td>
    <td>{match["team2"]}</td>
    <td>{Math.round(match["quality"])}</td>
    <td>{Math.round(match["importance"])}</td>
    <td>{Math.round(match["match_rating"])}</td>
    </tr>
  );
  return (
   <tbody>{listItems}</tbody>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.matches,
      match_rating: 0,
      quality: 0,
      importance: 0,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    let threshold = [];
    if (event.target.name === "match_rating" ) {
      this.props.matches.forEach(match => {
        if (match["match_rating"] > event.target.value &&
         match["quality"] > this.state.quality &&
         match["importance"] > this.state.importance) {
          threshold.push(match);
        }
      });
    this.setState({match_rating: event.target.value});
    } else if (event.target.name === "quality") {
        this.props.matches.forEach(match => {
          if (match["quality"] > event.target.value &&
           match["match_rating"] > this.state.match_rating &&
           match["importance"] > this.state.importance) {
            threshold.push(match);
          }
        });
        this.setState({quality: event.target.value});
      } else if (event.target.name === "importance") {
        this.props.matches.forEach(match => {
          if (match["importance"] > event.target.value &&
           match["match_rating"] > this.state.match_rating &&
           match["quality"] > this.state.quality) {
            threshold.push(match);
          }
        });
        this.setState({importance: event.target.value});
      } 
    this.setState({table: threshold});
  }

  render() {
    return (
      <div className="App">
        <div className="inputs">
          <label>Quality</label>
          <input name="quality" type="range" min="0" max="100" onInput={this.handleInput}></input>
          <label>Importance</label>
          <input name="importance" type="range" min="0" max="100" onInput={this.handleInput}></input>
          <label>Match Rating</label>
          <input name="match_rating" type="range" min="0" max="100" onInput={this.handleInput}></input>
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
    );
  }
}

export default App;
