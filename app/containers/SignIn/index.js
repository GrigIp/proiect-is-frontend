import React from 'react';
import PropTypes from 'prop-types';
import SignInComponent from 'components/SignIn/Loadable';
import SnackBar from "../../components/Snackbar";
import makeSelectSignIn from "./selectors";
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signIn } from "./actions";
import { Redirect } from 'react-router-dom';


export class SignIn extends React.Component {
  signIn({ username, password, remember }) {
    this.props.signIn(username, password, remember);
  }

  render() {
    if (this.props.token && localStorage.getItem('token')){
      return <Redirect to="/" />;
    }

    return (
      <div>
        <SnackBar variant="error" message={ this.props.error }/>
        <SignInComponent signIn={ params => this.signIn(params) }/>
      </div>
    )
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  token: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = makeSelectSignIn();

const mapDispatchToProps = dispatch => ({
  signIn: (username, password, remember) =>
    dispatch(signIn(username, password, remember)),
});

const withSaga = injectSaga({ key: 'signIn', saga });
const withReducer = injectReducer({ key: 'signIn', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(SignIn);

