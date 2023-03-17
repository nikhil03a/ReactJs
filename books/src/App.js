import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate'
import BookList from './components/BookList.js';

function App() {
  const [books,setBooks] = useState([])
  const createBook =(title)=>{
    const newBook = {id: Math.floor(Math.random()*1000000),title:title}
    setBooks([
      ...books,newBook
    ]);
    console.log(books);
  }
  const deleteBookById = (id)=>{
    const updatedBooks = books.filter((book)=>{
      return book.id!==id;
    })
    setBooks(updatedBooks);
  }
  const updateBook = (id,title)=>{
    const updatedBooks = books.map((book)=>{
      if(book.id===id){
        return {...book,title:title}
      }
      return book;
    })
    setBooks(updatedBooks);
    console.log(books);
  }
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books}  deleteBook={deleteBookById} updateBook={updateBook}/>
      <BookCreate createBook={createBook}/>
    </div>
  );
}

export default App;
