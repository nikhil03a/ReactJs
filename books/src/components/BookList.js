import React, { useContext } from 'react'
import BookShow from './BookShow'
import { GlobalContext } from '../GlobalContext'
const BookList = () => {
  const {books} = useContext(GlobalContext)
  const renderedBooks = books.map((book)=>{
    return ( <BookShow key={book.id} book={book} />)
  })
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList
