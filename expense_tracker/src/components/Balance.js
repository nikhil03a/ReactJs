import React from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
  const {transactions} = React.useContext(GlobalContext);
  let balance = 0;
  {for(let i=0; i<transactions.length;i++){
    balance=balance+transactions[i].amount;
  }}
  return (
    <div>
      <h4>Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  )
}

export default Balance
