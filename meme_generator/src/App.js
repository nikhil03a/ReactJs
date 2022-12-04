import logo from './logo.svg';
import './App.css';
import MemesData from './MemesData';
import React from 'react';

function App() {
  const [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText: "",
      url: ""
    }
  );
  const [allMemeImages, setAllMemeImages] = React.useState(MemesData);
  function getRandomMeme() {
    const memeArray = MemesData.data.memes;
    const random = Math.floor(Math.random() * memeArray.length);
    const newUrl = memeArray[random].url;
    setMeme(previousContent => ({
      ...previousContent,
      url: newUrl
    }))
  }
  function changeHandler(event) {
    setMeme(prevMeme => ({
      ...prevMeme,
      [event.target.name]: event.target.value
    }
    ))
  }
  return (
    <div className="App">
      <div className='header'>
        <img src='icon2.jpeg'></img>
        <h2>Meme Generator</h2>
      </div>
      <div className='main'>
        <div >
          <input type='text' placeholder='---Top Text---' name='topText' onChange={changeHandler}></input>
          <input type='text' placeholder='---Bottom Text---' name='bottomText' onChange={changeHandler}></input><br></br>
          <button onClick={getRandomMeme} >Get a new meme image</button>
        </div>
        <div className='meme'>
        <img src={meme.url}></img>
        <div className='top-text'>{meme.topText}</div>
        <div className='bottom-text'>{meme.bottomText}</div>
        </div>
        
      </div>
    </div>
  );
}
export default App;
