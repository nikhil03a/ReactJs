import React, { createContext,useCallback,useReducer} from 'react'
import axios from 'axios';
export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[]);
    const fetchBooks = useCallback(async ()=>{
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    },[]);
    const setBooks = (books)=>{
      dispatch({
        type:'SET',
        payload:books
      })
    }
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
          title
        })
        const newBook = response.data
        dispatch({
          type:'ADD',
          payload:newBook
        })
      }
      const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        dispatch({
          type:'DELETE',
          payload:id
        })
      }
      const updateBook = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title
        })
        dispatch({
          type:'UPDATE',
          payload:{
            id,response
          }
        })
      }
    return (<GlobalContext.Provider value={{books:state,fetchBooks,createBook,deleteBookById,updateBook}}>
        {children}
    </GlobalContext.Provider>)
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'SET':
      return [...action.payload];
    case 'ADD':
      return [...state,action.payload];
    case 'DELETE':
      const result = state.filter((ele)=>{
        return (ele.id !== action.payload)
      })
      return result;
    case 'UPDATE':
        const r = state.map((ele)=>{
          if(ele.id === action.payload.id)
            return action.payload.response.data;
          else  
            return ele
        })
        return r;
    default:
      return [];
  }
}
