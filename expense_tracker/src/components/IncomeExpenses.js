import React from 'react'
import { GlobalContext } from '../context/GlobalState'
const IncomeExpenses = () => {
  const {transactions} = React.useContext(GlobalContext);
  let income = 0;
  let expense = 0;
  {for(let i=0; i<transactions.length;i++){
    if(transactions[i].amount<0){
      expense+=Math.abs(transactions[i].amount);
    }else{
      income+=transactions[i].amount;
    }
  }}
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className='money minus'>-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
