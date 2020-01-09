const gradesSelector = state => {

  return state.gradesPage ? state.gradesPage.grades : [];
}

const errorSelector = state =>
  state.gradesPage ? state.gradesPage.error : '';

export { gradesSelector, errorSelector };
