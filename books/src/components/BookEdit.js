import React from 'react'
import { useState } from 'react';
const BookEdit = ({book,handleSubmit}) => {
  const [title,setTitle] = useState(book.title);
  const handleChange = (e)=>{
    setTitle(e.target.value);
  }
  const onSubmitClick = (e)=>{
    e.preventDefault();
    handleSubmit(book.id,title);
  }
  return (
    <div>
      <form onSubmit={onSubmitClick}>
        <label>Title</label>
        <input type='text' value={title} className='input' onChange={handleChange}></input><br></br>
        <input type='submit' value='Save' className='button is-primary'></input>
       </form>
    </div>
  )
}

export default BookEdit
