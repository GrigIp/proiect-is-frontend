const subjectsSelector = state =>
  state.subjectsPage ? state.subjectsPage.subjects : [];

const errorSelector = state =>
  state.subjectsPage ? state.subjectsPage.error : '';

export { subjectsSelector, errorSelector };
