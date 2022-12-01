import logo from './logo.svg';
import './App.css';
import cards from './cards';
function App() {
  return (
    <div>
<nav className='navbar'>
                <img src='globe.png' width='30px' height='30px'></img>
                <h2>my travel journal</h2>
    </nav>
    {cards}
    </div>
    
  );
}

export default App;
