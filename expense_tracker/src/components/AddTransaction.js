import React from 'react'

const AddTransaction = () => {
    const [text,setText] = React.useState('');
    const [amount,setAmount] = React.useState(0);
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form>
        <div className='form-control'>
            <label>Text</label>
            <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text....'></input>
        </div>
        <div className='form-control'>
            <label>Amount</label><br></br>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount....'></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
