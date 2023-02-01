import React from 'react'
const ACTIONS = {
    ADD_DIGIT : 'add-digit',
    CLEAR: 'clear',
    DELETE_DIGIT:'delete-digit',
    CHOOSE_OPERATION:'choose-operation',
    EVALUATE:'evaluate'
  }
const DigitButton = ({dispatch,digit}) => {
  return (
      <button className={digit=='=' ? "span-two" : ""} onClick={()=>dispatch({payload:digit, type:ACTIONS.ADD_DIGIT})}>{digit}</button>
  )
}

export default DigitButton
