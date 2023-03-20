import { useEffect, useContext } from 'react';
import './App.css';
import BookCreate from './components/BookCreate'
import BookList from './components/BookList.js';
import { GlobalContext } from './GlobalContext';
function App() {
  const {stableFetchBooks} = useContext(GlobalContext);
  useEffect(() => {
    stableFetchBooks();    
  },[stableFetchBooks]);
  return (
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>

  );
}

export default App;
