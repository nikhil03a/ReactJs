import NotesList from './components/NotesList';
import './App.css'
import {nanoid} from 'nanoid'
import { useState } from 'react';
import { MdToday } from 'react-icons/md';
function App() {
  const [notes,setNotes] = useState([{
    id:nanoid(),
    text:"This is my first note!",
    date:"08/01/2023"
  },{
    id:nanoid(),
    text:"This is my second note!",
    date:"08/01/2023"
  },{
    id:nanoid(),
    text:"This is my third note!",
    date:"09/01/2023"
  },{
    id:nanoid(),
    text:"This is my fourth note!",
    date:"10/01/2023"
  }]);
  const addNote = (text) =>{
    var today = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date: today.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
    console.log(notes)
  }
  return (
    <div className="container">
      <NotesList notes={notes} addNote={addNote}/>
    </div>
  );
}

export default App;
