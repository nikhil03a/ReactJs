import React from 'react'
import { GlobalContext } from './GlobalState'
const Content = () => {
    const {number,increase,decrease} = React.useContext(GlobalContext);
    return (
        <div>
            <div className='content'>
                <h1>Counter</h1>
                <p>{number}</p>
                <div className='buttons'>
                    <button type="button" className='btn' onClick={increase}>+</button>
                    <button type="button" className='btn' onClick={decrease}>-</button>
                </div>

            </div>
        </div>
    )
}

export default Content
