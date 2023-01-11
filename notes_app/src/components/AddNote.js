import React, { useState } from 'react'

const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState('');
    const [chars, setChars] = useState(200);
    const handleChange = (e) => {
        if (chars > 0) {
            setChars(prevChars => prevChars - 1);
            setNoteText(e.target.value);
        }
    }
    const handleSaveClick = (e) => {
        e.preventDefault();
        addNote(noteText);
        setNoteText('');
        setChars(200);
    }
    return (

        <div className='note new'>
            <textarea row="8" cols="10" onChange={handleChange} value={noteText} placeholder="Type to add a note...">
            </textarea>
            <div className='note-footer'>
                <small>{chars} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
