import React, { useReducer } from "react";
import uuid from "uuid/v4";
import TodoContext from "./Context";
import filterReducer, { FilterType, todoReducer } from "./Reducer";
import Filter from "./Components/Filter";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";

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
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, FilterType.ALL);
  
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
    <TodoContext.Provider value={dispatchTodos}>
      <Filter dispatch={dispatchFilter} />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </TodoContext.Provider>
  );
};

export default App;
