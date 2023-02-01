import './App.css';
import { useReducer } from 'react'; 
import DigitButton from './DigitButton';
const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT:'delete-digit',
  CHOOSE_OPERATION:'choose-operation',
  EVALUATE:'evaluate'
}
function App() {
  function reducer(state,action){
    switch(action.type){
      case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          current: `${state.current}${action.payload}`
        };  
    }
  }
  const [{current,previous,operation},dispatch] = useReducer(reducer,{previous:"123",current:"45",operation:"+  "})

  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operand'>{current} {operation}</div>
        <div className='current-operand'>{previous}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>÷</button>
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <button>*</button>
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <button>+</button>
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <button>-</button>
      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <button>=</button>
    </div>
  );
}

export default App;
