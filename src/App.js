import './App.css';
import { useState }
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
function app() {
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(res => {
      
    }).catch(err =>{})
  }


}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button type="button" class="btn btn-info" onClick={getQuote}>Get Random Quote</button>
        </div>
      </header>

    </div>
  );
}

export default App;
