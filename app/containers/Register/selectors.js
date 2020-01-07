const responseSelector = state =>
  state.register ? state.register.response : '';

const errorSelector = state =>
  state.register ? state.register.error : '';

export { responseSelector, errorSelector };
