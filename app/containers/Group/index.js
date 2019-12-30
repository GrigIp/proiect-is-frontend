import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplayPage from "../../components/DisplayPage";
import {errorSelector, groupSelector, studentsSelector} from "./selectors";
import {fetchGroupByUsername, fetchStudentsByGroupId} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';


class Group extends React.Component {
  componentDidMount() {
    const { sub: username } = jwt_decode(localStorage.getItem('token'));
    this.props.fetchGroupByUsername(username);
    this.props.fetchStudentsByGroupId(this.props.group.id); // this could cause problems
  }

  render() {
     return <DisplayPage error=''
                         fields={[
                           {
                             id: 'group',
                             value: "10",
                             label: 'Group:',
                           },
                           {
                             id: 'series',
                             value: "2",
                             label: 'Series:',
                           },
                           {
                             id: 'year',
                             value: "3",
                             label: 'Year:',
                           },
                           {
                             id: 'faculty',
                             value: "AC",
                             label: 'Faculty:',
                           }
                         ]}
                         tableData={[{firstName: 'Grigor', lastName: 'Ipatiov', email: 'ipatiov.grigor@yahoo.com'}]}
                         tableHeader={['First Name', 'Last Name', 'Email']}
                         tableTitle={'Group'}/>;
  }
}


Group.propTypes = {
  fetchGroupByUsername: PropTypes.func.isRequired,
  fetchStudentsByGroupId: PropTypes.func.isRequired,
  group: PropTypes.object,
  students: PropTypes.array,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  group: groupSelector,
  students: studentsSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchGroupByUsername: username => dispatch(fetchGroupByUsername(username)),
  fetchStudentsByGroupId: id => dispatch(fetchStudentsByGroupId(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'groupPage', saga });
const withReducer = injectReducer({ key: 'groupPage', reducer });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Group);

