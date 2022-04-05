import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/link1"><a>link 1</a></Link>
      <a>link 2</a>
      <a>link 3</a>
      <a>link 4</a>
      <a>link 5</a>
    </div>
  );
}

export default App;
