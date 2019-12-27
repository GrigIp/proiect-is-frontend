import NavBarComponent from 'components/NavBar';
import React from 'react';
import makeSelectSignIn from "../SignIn/selectors";

class NavBar extends React.Component {
  state = {
    authenticated : Boolean(localStorage.getItem('token'))
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.token !== newProps.token){
      this.setState({
        authenticated : Boolean(localStorage.getItem('token'))
      });
    }
  }

  render() {
      return <NavBarComponent authenticated={true}/>;
  }
}
const mapStateToProps = makeSelectSignIn();
export default NavBar;
