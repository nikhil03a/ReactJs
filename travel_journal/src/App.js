import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <img src='globe.png' width='30px' height='30px'></img>
        <h2>my travel journal</h2>
      </nav>
      <div className='card'>
        <img src='fuji.webp' width='250px' height='350px'></img>
        <div className='content'>
          <ul>
            <li>
              <p className='location'>📌Japan</p>
            </li>
            <li>
              <a href='https://goo.gl/maps/1DGM5WrWnATgkSNB8' className='link'>View on Google Maps</a>
            </li>
          </ul>
        </div>
        <div className='description'>
          
        <h1>Mount Fuji</h1>
        <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
