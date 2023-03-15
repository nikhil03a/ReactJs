import React, { useState } from 'react'

const SearchBar = ({ handleSubmit }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleFormSubmit = (e) =>{
    e.preventDefault();
    handleSubmit(text);
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input type='text' value={text} onChange={handleChange}></input>
      </form>
    </div>
  )
}

export default SearchBar
