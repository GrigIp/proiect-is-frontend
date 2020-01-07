import RegisterComponent from 'components/Register/Loadable';
import React from 'react';
import PropTypes from 'prop-types';
import SnackBar from "../../components/Snackbar";
import {createStructuredSelector} from "reselect";
import {errorSelector, responseSelector} from "./selectors";
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { register } from "./actions";
import {connect} from "react-redux";
import {compose} from "redux";
import { Redirect } from "react-router-dom";


export class Register extends React.Component {
  register({ firstName, lastName, email, username, password, matchingPassword, role }) {
    this.props.register(firstName, lastName, email, username, password, matchingPassword, role);
  }

  render() {
    if (!!this.props.response) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <RegisterComponent register={ params => this.register(params) }/>
      </div>
    )
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
  response: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  response: responseSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  register: (firstName, lastName, email, username, password, matchingPassword, role) =>
    dispatch(register(firstName, lastName, email, username, password, matchingPassword, role)),
});

const withSaga = injectSaga({ key: 'register', saga });
const withReducer = injectReducer({ key: 'register', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Register);
