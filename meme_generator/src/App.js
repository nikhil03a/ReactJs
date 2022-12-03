import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src='icon2.jpeg'></img>
        <h2>Meme Generator</h2>
      </div>
      <div className='main'>
        <form >
          <input type='text' placeholder='---Top Text---'></input>
          <input type='text' placeholder='---Bottom Text---'></input><br></br>
          <button >Get a new meme image</button>
        </form>
      </div>
    </div>
  );
}

export default App;
