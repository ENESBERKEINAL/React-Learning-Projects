import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import './App.css';

const todoListState = atom({
  key: 'todoListState',
  default: ['Apple', 'Egg', 'Butter'],
})


function App() {

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [todo, setTodo] = useState('');


  const deleteElementAt = (index) => {
    const todos = [...todoList];
    todos.splice(index, 1);
    setTodoList(todos);
  }

  const editItemAt = (index) => {
    const todos = [...todoList];

    let newItemName = prompt('Edit the todo', todoList[index])

    todos[index] = newItemName;

    setTodoList(todos);
  }

  return (<>

    {todoList.map((item, index) => (
      <li key={item} style={{ marginLeft: '10px' }}>{item}
        <button onClick={() => deleteElementAt(index)}>Delete</button>
        <button onClick={() => editItemAt(index)}>Edit</button>
      </li>
    ))}

    <input value={todo} onChange={(e) => setTodo(e.target.value)} />

    <button onClick={() => setTodoList((todos) => [...todos, todo])} > Add</button>
  </>
  );
}

export default App;
