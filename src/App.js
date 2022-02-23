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
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    let threshold = [];
    this.props.matches.forEach(match => {
      if (match["match_rating"] > event.target.value) {
        threshold.push(match);
      }
    });
    this.setState({table: threshold});
  }

  render() {
    return (
      <div className="App">
        <input type="number" onInput={this.handleInput}></input>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>League</th>
              <th>Team 1</th>
              <th>Team 2</th>
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
