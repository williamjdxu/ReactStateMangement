import React, { useContext } from "react";
import { ActionFilter as Action } from "/src/Reducer";
import DispatchContext from "/src/Context";

const Filter = () => {
  const dispatch = useContext(DispatchContext);

  const handleShowAll = () => {
    dispatch({ type: Action.SHOW_ALL });
  };

  const handleShowComplete = () => {
    dispatch({ type: Action.SHOW_COMPLETE });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: Action.SHOW_INCOMPLETE });
  };

  return (
    <div>
      <button type="button" onClick={handleShowAll}>
        Show All
      </button>
      <button type="button" onClick={handleShowComplete}>
        Show Complete
      </button>
      <button type="button" onClick={handleShowIncomplete}>
        Show handleShowIncomplete
      </button>
    </div>
  );
};

export default Filter;
