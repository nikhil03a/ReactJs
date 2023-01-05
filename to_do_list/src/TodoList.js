import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
const TodoList = () => {
    const {todolist,deleteTodo} = useContext(GlobalContext);
  return (
    <div>
      {todolist.map((todo)=>{
        return(<div className= 'todo-list'>
            {todo.text} 
            <div>
                <button className='remove' onClick={()=>deleteTodo(todo.id)}>x</button>
                </div>
            </div>)
      })}
    </div>
  )
}

export default TodoList
