import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('');
const initialState = [
    { id: 1, text: "Cleaning Vessels" },
    { id: 2, text: "Washing Clothes"}
]
export const GlobalProvider = ({ children }) => {
    const [list, setList] = useState(initialState);
    const addTodo = (newText) => {
        if (newText !== '') {
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                text: newText,
                isComplete:false
            }
            setList(prevList => [...prevList, newTodo]);
            console.log(list);
        }
    }

    function deleteTodo(id){
        const newList = list.filter(todo => todo.id!==id )
        setList(newList);
        console.log(list);
    }
    
    return (<GlobalContext.Provider value={{ todolist: list, addTodo, deleteTodo}}>
        {children}
    </GlobalContext.Provider>)
}
