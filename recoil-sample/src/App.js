import { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import './App.css';

const todoListState = atom({
  key: 'todoListState',
  default: [
    { name: 'Apple', isCompleted: false },
    { name: 'Egg', isCompleted: false },
    { name: 'Butter', isCompleted: false },
  ]
})

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {

    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch(filter){
      case 'completed': 
        return list.filter((item) => item.isCompleted);
      case 'uncompleted': 
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  }
})


function App() {

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const filteredTodos = useRecoilValue(filteredTodoListState);
  const [todo, setTodo] = useState({ name: '' });


  const deleteElementAt = (index) => {
    const todos = [...todoList];
    todos.splice(index, 1);
    setTodoList(todos);
  }

  const editItemAt = (index) => {
    const todos = [...todoList];
    const todo = todoList[index];

    let newItemName = prompt('Edit the todo', todo.name)

    if (newItemName) {

      todos[index] = { ...todo, name: newItemName };
      setTodoList(todos);
    }
  }

  const completeAt = (index) => {
    const todos = [...todoList];
    const todo = todos[index];


    todos[index] = { name: todo.name, isCompleted: !todo.isCompleted };

    setTodoList(todos);


  }

  return (<>

    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='uncompleted'>Uncompleted</option>

    </select>

    {filteredTodos.map((item, index) => (
      <li key={item.name} style={{ marginLeft: '10px', marginTop: '10px' }}>
        <span onClick={() => completeAt(index)} style={{ textDecoration: item.isCompleted ? 'line-through' : 'initial' }}>
          {item.name}
        </span>


        <button onClick={() => deleteElementAt(index)}>Delete</button>
        <button onClick={() => editItemAt(index)}>Edit</button>
      </li>
    ))}

    <input style={{ margin: '10px' }} value={todo.name} onChange={(e) => setTodo({ name: e.target.value })} />

    <button onClick={() => setTodoList((todos) => [...todos, todo])} > Add</button>
  </>
  );
}

export default App;
