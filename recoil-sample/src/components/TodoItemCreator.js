import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/atoms';

function TodoItemCreator() {

    const [todo, setTodo] = useState({ name: '' });
    const [todoList, setTodoList] = useRecoilState(todoListState);

    return (<>

        <input style={{ margin: '10px' }} value={todo.name} onChange={(e) => setTodo({ name: e.target.value })} />

        <button onClick={() => setTodoList((todos) => [...todos, todo])} > Add</button>

    </>
    )
}

export default TodoItemCreator