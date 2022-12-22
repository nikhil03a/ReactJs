import React from 'react'
import { GlobalContext } from '../context/GlobalState.js'
const TransactionList = () => {
    const { transactions } = React.useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction => {
                    return (<li className= {transaction.amount>0 ? "plus" : "minus"}>{transaction.text}<span>${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button></li>)
                })}
            </ul>
        </div>
    )
}

export default TransactionList
