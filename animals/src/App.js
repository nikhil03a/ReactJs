import { useState } from 'react';
import AnimalShow from './AnimalShow.js';
import './app.css'
function App() {
  const animal = ['dog', 'horse', 'cat', 'gator', 'cow', 'bird'];
  function getRandomAnimal() {
    return animal[Math.floor(Math.random() * 6)];
  }
  const [animals, setAnimals] = useState([]);
  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>
        {animals.map((ele) => {
          return <AnimalShow type={ele} />
        })}
      </div>

    </div>
  );
}

export default App;
