import React from 'react'
import { GlobalContext } from './GlobalState'
const SetValue = () => {
    const {setVal} = React.useContext(GlobalContext);
    const [num,setNum] = React.useState();
    function handleChange(event){
        setNum(event.target.value);
    }
    function handleClick(event){
        setVal(num);
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <input type="number" onChange={handleChange} value={num}></input> 
        <button onClick={handleClick}>SetValue</button>
      </form>
    </div>
  )
}

export default SetValue
