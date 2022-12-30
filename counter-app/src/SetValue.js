import React from 'react'
import { GlobalContext } from './GlobalState'
const SetValue = () => {
    const { number, setVal } = React.useContext(GlobalContext);
    const [num, setNum] = React.useState();
    function handleChange(event) {
        setNum(event.target.value);
    }
    function handleClick(event) {
        if (num > 0) {
            setVal(num);
            setNum("");
        }
        event.preventDefault();
    }
    const temp = "Current Value is " + number;
    return (
        <div className='content-set'>
            <form>
                <input type="number" onChange={handleChange} value={num} className='input2' placeholder={temp}></input>
                <button onClick={handleClick} className='btn2'>SetValue</button>
            </form>
        </div>
    )
}

export default SetValue
