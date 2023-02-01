import React from 'react'
import { ACTIONS } from './App'
const DigitButton = ({dispatch,operation}) => {
  return (
      <button onClick={()=>dispatch({payload:operation, type:ACTIONS.CHOOSE_OPERATION})}>{operation}</button>
  )
}

export default DigitButton
