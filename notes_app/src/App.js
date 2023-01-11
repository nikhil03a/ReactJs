import NotesList from './components/NotesList';
import './App.css'
import { nanoid } from 'nanoid'
import { useState } from 'react';
import { MdNoteAdd, MdToday } from 'react-icons/md';
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "08/01/2023"
  }, {
    id: nanoid(),
    text: "This is my second note!",
    date: "08/01/2023"
  }, {
    id: nanoid(),
    text: "This is my third note!",
    date: "09/01/2023"
  }, {
    id: nanoid(),
    text: "This is my fourth note!",
    date: "10/01/2023"
  }]);
  const addNote = (text) => {
    var today = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: today.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }
  const [searchText, setSearchText] = useState('');
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark && 'dark'}`}>
      <div className="container">
        <Header darkMode={setDark} />
        <Search handleSearchText={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} deleteNote={deleteNote} addNote={addNote} />
      </div>
    </div>
  );
}

export default App;
