import logo from './logo.svg';
import React from 'react';
import './App.css';




function App() {
  const [data,setData] = React.useState({
    email:"",
    pwd:"",
    cpwd:"",
    newsletter:false
  })
  
  function handleChange(event){
    setData(previousData => (
      {
        ...previousData,
        [event.target.name]:event.target.type=="checkbox" ? !previousData.newsletter : event.target.value
      }
    ))
  }
  function handleSubmit(){
    if(data.pwd == data.cpwd && data.pwd!=""){
      console.log("Signed up successfully")
      console.log(data);
    }else{
      console.log("Passwords dont Match");
    }
    if(data.newsletter == true){
      console.log("Thanks for signingup for our newsletter"
      )
    }
      
  }
  return (
    <div className="App">
      <div>
        <label for="email">Enter your email: </label>
        <input type="email" name="email" onChange={handleChange} value={data.email}></input><br></br>
        <label for="pwd">Enter your Password:</label>
        <input type="password" name="pwd" onChange={handleChange}></input><br></br>
        <label for="cpwd" name="cpwd">Confirm Password: </label>
        <input type="password" name="cpwd" onChange={handleChange}></input><br></br>
        <input type="checkbox" name="newsletter" onChange={handleChange} value={data.checked}></input>
        <label for="checkbox" checked={data.newsletter}>Sign up for Newsletter</label><br></br>
        <button value="Submit" onClick={handleSubmit}>Submit</button><br></br>
      </div>
    </div>
  );
}

export default App;
