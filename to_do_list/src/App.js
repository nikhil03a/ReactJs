import './App.css';
import { GlobalProvider } from './GlobalState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <GlobalProvider>
      <h3>Todo App</h3>
      <TodoForm />
      <TodoList />
    </GlobalProvider>
  );
}

export default App;
