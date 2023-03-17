import React from 'react'
import BookShow from './BookShow'
const BookList = ({books,deleteBook,updateBook}) => {
  return (
    <div className='book-list'>
      {books.map((book)=>{
        return <BookShow key={book.id} book={book} deleteBook={deleteBook} updateBook={updateBook} />
      })}
    </div>
  )
}

export default BookList
