import React from 'react'
import { ACTIONS } from './App'
const DigitButton = ({dispatch,digit}) => {
  return (
      <button onClick={()=>dispatch({payload:digit, type:ACTIONS.ADD_DIGIT})}>{digit}</button>
  )
}

export default DigitButton
