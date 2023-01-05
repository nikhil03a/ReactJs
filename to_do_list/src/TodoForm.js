import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalState';
const TodoForm = () => {
    const [text,setText] = useState("");
    const {addTodo} = useContext(GlobalContext);
    const handleChange = (e)=>{
        setText(e.target.value);
    }
    const handleSubmit  =(e)=>{
        e.preventDefault();
        addTodo(text)
        setText('');
    }
    return (
    <div>
      <form className='form'>
        <input type="text" onChange={handleChange} name="text" value={text} placeholder='Enter new Todo'></input>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
