const gradesSelector = state =>
  state.gradesPage ? state.gradesPage.group : [];

const errorSelector = state =>
  state.gradesPage ? state.gradesPage.error : '';

export { gradesSelector, errorSelector };
