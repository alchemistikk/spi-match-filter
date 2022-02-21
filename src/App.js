import logo from './logo.svg';
import './App.css';
import data from './match-data'
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
          <tr>
            <td>{data[0]["date"]}</td>
            <td>{data[0]["league"]}</td>
            <td>{data[0]["team1"]}</td>
            <td>{data[0]["team2"]}</td>
            <td>{data[0]["quality"]}</td>
            <td>{data[0]["importance"]}</td>
            <td>{data[0]["match_rating"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
