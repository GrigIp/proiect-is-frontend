const groupSelector = state =>
  state.groupPage ? state.groupPage.group : {};

const errorSelector = state =>
  state.groupPage ? state.groupPage.error : '';

const studentsSelector = state =>
  state.groupPage ? state.groupPage.students : [];

export { groupSelector, errorSelector, studentsSelector };
