import React, { useState, useReducer } from "react";
import uuid from "uuid/v4";
import filterReducer, { Action, FilterType } from "./Reducer"

const initialTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn Firebase",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn GraphQL",
    complete: false
  }
];

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, FilterType.ALL);

  const handleChangeInput = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    if (task) {
      setTodos(todos.concat({ id: uuid(), task, complete: false }));
    }
    setTask("");
    event.preventDefault();
  };

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  const handleShowAll = () => {
    dispatchFilter({ type: Action.SHOW_ALL})
  }

  const handleShowComplete = () => {
    dispatchFilter({ type: Action.SHOW_COMPLETE})
  }

  const handleShowIncomplete = () => {
    dispatchFilter({ type: Action.SHOW_INCOMPLETE})
  }

  const filteredTodos = todos.filter(todo => {
    if(filter === FilterType.ALL) {
      return true;
    }

    if(filter === FilterType.COMPLETE && todo.complete) {
      return true;
    }

    if(filter === FilterType.INCOMPLETE && !todo.complete) {
      return true;
    }

    return false;
  })

  return (
    <div>
      <div>
        <button type="button" onClick={handleShowAll}>Show All</button>
        <button type="button" onClick={handleShowComplete}>Show Complete</button>
        <button type="button" onClick={handleShowIncomplete}>Show handleShowIncomplete</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default App;
