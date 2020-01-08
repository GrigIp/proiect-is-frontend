const scheduleSelector = state =>
  state.schedulePage ? state.schedulePage.schedule : [];

const errorSelector = state =>
  state.schedulePage ? state.schedulePage.error : '';

export { scheduleSelector, errorSelector };
