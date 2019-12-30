import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplayPage from "../../components/DisplayPage";
import {errorSelector, gradesSelector} from "./selectors";
import {fetchGrades} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';


class Grades extends React.Component {
  componentDidMount() {
    const { sub: username, roles: role } = jwt_decode(localStorage.getItem('token'));
    this.props.fetchGrades(username, role);
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
                        tableData={[{professorName: 'Eneia Todoran', subject: 'Inginerie software', grade: 5, date: '09.09.2019', semester: 2, year: 3}]}
                        tableHeader={['Professor Name', 'Subject', 'Grade', 'Date', 'Semester', 'Year']}
                        tableTitle={'Grades'}/>;
  }
}


Group.propTypes = {
  fetchGrades: PropTypes.func.isRequired,
  grades: PropTypes.array,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  grades: gradesSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchGrades: (username, role) => dispatch(fetchGrades(username, role)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'gradesPage', saga });
const withReducer = injectReducer({ key: 'gradesPage', reducer });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Grades);
