export const ActionFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_INCOMPLETE: "SHOW_INCOMPLETE"
};

export const FilterType = {
  ALL: "ALL",
  COMPLETE: "COMPLETE",
  INCOMPLETE: "INCOMPLETE"
};

export const ActionTodo = {
  DO_TODO: "DO_TODO",
  UNDO_TODO: "UNDO_TODO",
  ADD_TODO: "ADD_TODO"
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ActionTodo.DO_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case ActionTodo.UNDO_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case ActionTodo.ADD_TODO:
      return state.concat({
        id: action.id,
        task: action.task,
        complete: false
      });
    default:
      return state;
  }
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case ActionFilter.SHOW_ALL:
      return FilterType.ALL;
    case ActionFilter.SHOW_COMPLETE:
      return FilterType.COMPLETE;
    case ActionFilter.SHOW_INCOMPLETE:
      return FilterType.INCOMPLETE;
    default:
      return state;
  }
};
export default filterReducer;
