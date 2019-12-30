const groupSelector = state =>
  state.groupPage ? state.groupPage.group : {};

const studentsSelector = state =>
  state.groupPage ? state.groupPage.students : [];

const errorSelector = state =>
  state.groupPage ? state.groupPage.error : '';

export { groupSelector, studentsSelector, errorSelector };
