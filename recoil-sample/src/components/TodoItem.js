import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../state/selectors';
import { todoListState } from '../state/atoms';

function TodoItem() {

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const filteredTodos = useRecoilValue(filteredTodoListState);


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

    {filteredTodos.map((item, index) => (
      <li key={item.name} style={{ marginLeft: '10px', marginTop: '10px' }}>

        <span onClick={() => completeAt(index)} style={{ textDecoration: item.isCompleted ? 'line-through' : 'initial' }}>
          {item.name}
        </span>

        <button onClick={() => deleteElementAt(index)}>Delete</button>
        <button onClick={() => editItemAt(index)}>Edit</button>

      </li>
    ))}


  </>
  )
}

export default TodoItem