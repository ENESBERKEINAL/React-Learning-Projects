import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import './App.css';

const todoListState = atom({
  key: 'todoListState',
  default: [
    {name: 'Apple', isCompleted: false},
    {name: 'Egg', isCompleted: false},
    {name: 'Butter', isCompleted: false},
  ]
})


function App() {

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [todo, setTodo] = useState({name: ''});


  const deleteElementAt = (index) => {
    const todos = [...todoList];
    todos.splice(index, 1);
    setTodoList(todos);
  }

  const editItemAt = (index) => {
    const todos = [...todoList];
    const todo = todoList[index];
    
    let newItemName = prompt('Edit the todo', todoList[index])

    todos[index] = {...todo, name : newItemName};

    setTodoList(todos);
  }

  return (<>

    {todoList.map((item, index) => (
      <li key={item.name} style={{ marginLeft: '10px' }}>{item.name}
        <button onClick={() => deleteElementAt(index)}>Delete</button>
        <button onClick={() => editItemAt(index)}>Edit</button>
      </li>
    ))}

    <input value={todo.name} onChange={(e) => setTodo({name : e.target.value})} />

    <button onClick={() => setTodoList((todos) => [...todos, todo])} > Add</button>
  </>
  );
}

export default App;
