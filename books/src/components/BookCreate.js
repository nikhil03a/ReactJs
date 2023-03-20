import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext';
const BookCreate = () => {
  const {createBook} = useContext(GlobalContext);
  const [title,setTitle] = useState('');
  const handleChange = (e)=>{
    setTitle(e.target.value);
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    createBook(title);
  }
  return (
    <div className='book-create'>
      <h3>
        Add a book
      </h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Title:</label>
        <input type='text' value={title} onChange={handleChange}></input>
        <input className='button' type='submit' value='Create'></input>
      </form>
    </div>
  )
}

export default BookCreate
