import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import TodoListFilters from './components/TodoListFilters';

function App() {

  return (<>

    <TodoListFilters />
    <TodoItem />
    <TodoItemCreator />
  
    </>
  );
}

export default App;
