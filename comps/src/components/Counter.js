import React from 'react'
import Button from './Button'
import { useReducer } from 'react';
import produce from 'immer'
const Counter = () => {
    const reducer = (state,action)=>{
        switch(action.type){
            case "INCR_COUNT":
                state.count =  state.count+1;
                return;
            case "DECR_COUNT":
                state.count = state.count-1;
                return;
            case "SET":
                return {...state,value:action.payload}
            case "INCREMENT_VALUE":
                return {value:0,count:parseInt(state.count)+parseInt(state.value)}
            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(produce(reducer),{
        count:0,
        value:0
    })
    
    const increment = () => {
        dispatch({
            type:"INCR_COUNT"
        })
    }
    const decrement = ()=>{
        dispatch({
            type:"DECR_COUNT"
        })
    }
    const handleChange  = (event)=>{
        dispatch({
            type:"SET",
            payload: event.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type:"INCREMENT_VALUE"
        })
    }
    return (
        <div>
            <p>{state.count || 0}</p>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <input type='number' onChange={handleChange} value={state.value}></input>
            <Button onClick={handleSubmit}>ADD MORE</Button>
        </div>
    )
}

export default Counter
