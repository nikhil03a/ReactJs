import './App.css';
import useFormInput from './useFormInput';
import useOnlineStatus from './useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();
  const firstName = useFormInput("Nikhil");
  return (
    <div>
      <h1>{isOnline}</h1>
      <button disabled={!isOnline}>{isOnline !? "Save" : "Reconnecting...."}</button>
      <input type="text" value={firstName.value} onChange={firstName.onChange}></input>
      <h2>{firstName.value}</h2>
    </div>
  );
}

export default App;
