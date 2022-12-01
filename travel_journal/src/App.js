import logo from './logo.svg';
import './App.css';
import cards from './cards';
import Navbar from './Navbar';
function App() {
  return (
    <div>
      <Navbar />
      {cards}
    </div>

  );
}

export default App;
