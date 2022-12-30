import './App.css';
import Content from './Content';
import { GlobalProvider } from './GlobalState';
import SetValue from './SetValue';
function App() {
  return (
    <GlobalProvider>
      <Content />
      <SetValue />
    </GlobalProvider>
  );
}

export default App;
