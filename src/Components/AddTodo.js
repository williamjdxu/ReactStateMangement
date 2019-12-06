import React, { useState } from "react";
import uuid from "uuid/v4";
import { ActionTodo as Action } from "/src/Reducer";

const AddTodo = ({ dispatch }) => {
  const [task, setTask] = useState('');
  
  const handleSubmit = event => {
    if (task) {
      dispatch({ type: Action.ADD_TODO, task, id: uuid() });
    }
    setTask('');
    event.preventDefault();
  };

  const handleChange = event => setTask(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;