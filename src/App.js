import logo from './logo.svg';
import './App.css';
import data from './match-data'

function TableRow(props) {
  return (
    <tr>
    <td>{props.date}</td>
    <td>{props.league}</td>
    <td>{props.team1}</td>
    <td>{props.team2}</td>
    <td>{props.quality}</td>
    <td>{props.importance}</td>
    <td>{props.match_rating}</td>
    </tr>
  )
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
        <tbody>
          <TableRow 
            date={data[0]["date"]} 
            league={data[0]["league"]}
            team1={data[0]["team1"]}
            team2={data[0]["team2"]}
            quality={data[0]["quality"]}
            importance={data[0]["importance"]}
            match_rating={data[0]["match_rating"]}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
