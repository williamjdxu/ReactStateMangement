export const Action = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
}

export const FilterType = {
  ALL: "ALL",
  COMPLETE: "COMPLETE",
  INCOMPLETE: "INCOMPLETE"
}

const filterReducer = (state, action) => {
  switch(action.type) {
    case Action.SHOW_ALL:
      return FilterType.ALL;
    case Action.SHOW_COMPLETE:
      return FilterType.COMPLETE;
    case Action.SHOW_INCOMPLETE:
      return FilterType.INCOMPLETE;
    default:
      throw new Error();
  }
}

export default filterReducer;