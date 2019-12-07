const combinedReducer = reducers => {
  // Global State
  const state = Object.keys(reducers).reduce(
    (acc, key) => ({ ...acc, [key]: reducers[key][0] }),
    {}
  );
  // Global Dispatch Function
  const dispatch = action =>
    Object.keys(reducers)
      .map(key => reducers[key][1])
      .forEach(fn => fn(action));

  return [state, dispatch];
};

export default combinedReducer;
