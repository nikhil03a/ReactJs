import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({notes,addNote,deleteNote}) => {
  return (
    <div className='notes-list'>
      {notes.map((note)=>{
        return <Note deleteNote={deleteNote} note={note} />
      })}
      <AddNote addNote={addNote}/>
    </div>
  )
}

export default NotesList
