const gradesSelector = state => state.gradesPage ? state.gradesPage.grades : [];

const gradeSelector = state => state.gradesPage ? state.gradesPage.grade : undefined;

const errorSelector = state =>
  state.gradesPage ? state.gradesPage.error : '';

export { gradesSelector, errorSelector, gradeSelector };
