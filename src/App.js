import logo from './logo.svg';
import './App.css';
import data from './add-match-data'
function App() {
  return (
    <div className="App">
      <p>{JSON.stringify(data[0])}</p>
    </div>
  );
}

export default App;
