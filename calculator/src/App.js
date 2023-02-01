import './App.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton'
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}
function App() {
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_DIGIT:
        if (action.payload === '0' && state.current === '0') {
          return state;
        } else if (action.payload === '.' && state.current.includes('.')) {
          return state;
        }
        return {
          ...state,
          current: `${state.current || ""}${action.payload}`
        };
      case ACTIONS.CLEAR:
        return {};
      case ACTIONS.CHOOSE_OPERATION:
        if (state.current == null) {
          return { ...state, operation: action.payload }
        }
        if (state.current == null && state.previous == null) {
          return state;
        }
        if (state.previous == null) {
          return { ...state, previous: state.current, current: null, operation: action.payload };
        }
        return { ...state, previous: evaluate(state), current: null, operation: action.payload };
      case ACTIONS.EVALUATE:
        if(state.current == null && state.previous==null){
          return state;
        }
        if(state.current==null){
          return {...state,operation:null,current:state.previous,previous:null};
        }
        return {...state,previous:null,operation:null,current:evaluate(state)}
    }
  }
  function evaluate({ current, previous, operation }) {
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return "";
    let computation = "";
    switch (operation) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      case '÷':
        computation = prev / curr;
        break;
    }
    return computation;
  }
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, { previous: null, current: null, operation: null })

  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operand'>{previous} {operation}</div>
        <div className='current-operand'>{current}</div>
      </div>
      <button className='span-two' onClick={() => { dispatch({ type: ACTIONS.CLEAR }) }}>AC</button>
      <button>DEL</button>
      <OperationButton dispatch={dispatch} operation="÷" />
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <OperationButton dispatch={dispatch} operation="*" />
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <OperationButton dispatch={dispatch} operation="+" />
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <OperationButton dispatch={dispatch} operation="-" />
      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <button className='span-two ' onClick={() => { dispatch({ type: ACTIONS.EVALUATE }) }}>=</button>
    </div>
  );
}

export default App;
