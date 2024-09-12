
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl '>learn About Redux tollkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
