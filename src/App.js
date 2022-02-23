import logo from './logo.svg';
import './App.css';
import onlyFutureMatches from './get-future-matches';

function TableBody(props) {
  const listItems = props.data.map(match =>
    <tr>
    <td>{match["date"]}</td>
    <td>{match["league"]}</td>
    <td>{match["team1"]}</td>
    <td>{match["team2"]}</td>
    <td>{match["quality"]}</td>
    <td>{match["importance"]}</td>
    <td>{match["match_rating"]}</td>
    </tr>
  );
  return (
   <tbody>{listItems}</tbody>
  );
}

function App() {
  return (
    <div className="App">
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
        <TableBody data={onlyFutureMatches} />
      </table>
    </div>
  );
}

export default App;
