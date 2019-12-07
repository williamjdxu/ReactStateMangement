import React, { useReducer } from "react";
import uuid from "uuid/v4";
import DispatchContext from "./Context";
import filterReducer, { FilterType, todoReducer } from "./Reducer";
import Filter from "./Components/Filter";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import combinedReducer from "./Dispatch";

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
  const [state, dispatch] = combinedReducer({
    filter: useReducer(filterReducer, FilterType.ALL),
    todos: useReducer(todoReducer, initialTodos)
  });

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === FilterType.ALL) {
      return true;
    }
    if (state.filter === FilterType.COMPLETE && todo.complete) {
      return true;
    }
    if (state.filter === FilterType.INCOMPLETE && !todo.complete) {
      return true;
    }

    return false;
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </DispatchContext.Provider>
  );
};

export default App;
