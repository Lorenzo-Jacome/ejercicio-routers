import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/link1"><a>link 1</a></Link>
      <br/>
      <Link to="/button"><a>Component A</a></Link>
      <br/>
      <Link to="/checkbox"><a>Component B</a></Link>
      <br/>
      <Link to="/sliders"><a>Component C</a></Link>
    </div>
  );
}

export default App;
