import NavBarComponent from 'components/NavBar';
import React from 'react';
import reducer from '../SignIn/reducer';
import makeSelectSignIn from '../SignIn/selectors';
import saga from '../SignIn/saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

class NavBar extends React.Component {
  state = {
    authenticated : Boolean(localStorage.getItem('token'))
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.token !== newProps.token) {
      this.setState({
        authenticated: Boolean(localStorage.getItem('token')),
      });
    }
  }

  render() {
      return <NavBarComponent authenticated={this.state.authenticated}/>;
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
