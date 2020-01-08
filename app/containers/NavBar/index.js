import NavBarComponent from 'components/NavBar';
import React from 'react';
import reducer from '../SignIn/reducer';
import makeSelectSignIn from '../SignIn/selectors';
import saga from '../SignIn/saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import jwt_decode from 'jwt-decode';

class NavBar extends React.Component {
  state = {
    authenticated : Boolean(localStorage.getItem('token')),
    role: ''
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.token !== newProps.token) {
      this.setState({
        authenticated: Boolean(localStorage.getItem('token')),
      });
      if (Boolean(localStorage.getItem( 'token'))) {
        const token = localStorage.getItem('token');

        this.setState({
          role: jwt_decode(token).roles
        });
      }
    }
  }

  render() {
      return <NavBarComponent authenticated={this.state.authenticated} role={this.state.role}/>;
  }
}

const mapStateToProps = makeSelectSignIn();

const withSaga = injectSaga({ key: 'signIn', saga });
const withReducer = injectReducer({ key: 'signIn', reducer });

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(NavBar);
