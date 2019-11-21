import { createSelector } from 'reselect';

const initialState = {};

const selectSignInDomain = state => state.signIn || initialState;

const makeSelectSignIn = () =>
  createSelector(
    selectSignInDomain,
    substate => substate,
  );

export default makeSelectSignIn;
export { selectSignInDomain };
