import React from 'react'
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {
  const {addTransaction} = React.useContext(GlobalContext);
    const [text,setText] = React.useState('');
    const [amount,setAmount] = React.useState(0);
    function onSubmit(e){
      e.preventDefault();
      const newTransaction = {
        id:Math.floor(Math.random()*10000000),
        text:text,
        amount:+amount
      }
      addTransaction(newTransaction);
    }
    return (
    <div>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Text</label>
            <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text....'></input>
        </div>
        <div className='form-control'>
            <label>Amount (negative for expense & positive for income)</label><br></br>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount....'></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
