import React, { useContext } from "react";
import { ActionTodo as Action } from "/src/Reducer";
import DispatchContext from "/src/Context";

const TodoItem = ({ todo }) => {
  const dispatch = useContext(DispatchContext);

  const handleChange = () =>
    dispatch({
      type: todo.complete ? Action.UNDO_TODO : Action.DO_TODO,
      id: todo.id
    });
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
};

const TodoList = ({ dispatch, todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} dispatch={dispatch} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
