import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({notes,addNote}) => {
  return (
    <div className='notes-list'>
      {notes.map((note)=>{
        return <Note note={note} />
      })}
      <AddNote addNote={addNote}/>
    </div>
  )
}

export default NotesList
