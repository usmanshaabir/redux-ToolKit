import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../feature/todo/todoSlice';

export default function Todo() {
  const todos = useSelector(state => state.todos.todos);

  console.log("todos", todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Todos</h2>
      {Array.isArray(todos) && todos.map((todo) => {
        console.log("tttttt", todo);
        return (
          <ul key={todo.id}>
            <li>{todo.text}</li>
            <li>
              <button
                className='btn btn-primary'
                onClick={() => { dispatch(removeTodo(todo.id)) }}>
                Delete
              </button>
            </li>
          </ul>
        );
      }
      )}
    </>
  );
}
