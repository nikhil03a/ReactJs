import React, { useContext, useState } from 'react'
import BookEdit from './BookEdit'
import { GlobalContext } from '../GlobalContext'
const BookShow = ({book}) => {
  const {deleteBookById,updateBook} = useContext(GlobalContext)
  const handleDelete = () => {
    deleteBookById(book.id);
  }
  const handleEdit = () =>{
    setEdit(!edit);
  }
  const handleSubmit= (id,title)=>{
    updateBook(id,title);
    setEdit(!edit);
  }
  const [edit, setEdit] = useState(false);
  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} handleSubmit={handleSubmit}/>
  }
  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}></button>
        <button className='delete' onClick={handleDelete}>X</button>
      </div>

    </div>
  )
}

export default BookShow
