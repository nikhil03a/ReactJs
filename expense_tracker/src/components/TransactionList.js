import React from 'react'
import { GlobalContext } from '../context/GlobalState.js'
import Transaction from './Transaction.js';
const TransactionList = () => {
    const { transactions } = React.useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction => 
                   (<Transaction key={transaction.id} transaction={transaction} />)
                )}
            </ul>
        </div>
    )
}

export default TransactionList
