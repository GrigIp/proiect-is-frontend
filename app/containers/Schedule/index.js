import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplaySchedule from "../../components/DisplaySchedule";
import {errorSelector, scheduleSelector} from "./selectors";
import {fetchSchedule} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';


class Schedule extends React.Component {
  componentDidMount() {
    const { sub: username, roles: role } = jwt_decode(localStorage.getItem('token'));
    this.props.fetchSchedule(username, role);
  }

  render() {
    return <DisplaySchedule error=''
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
                        tableData={[{hour: '08:00', d1: 'Ac', d2: 'ssc', d3:'pg', d4:'-', d5:'can'},
                                    {hour: '10:00', d1: 'Ac', d2: 'ssc', d3:'pg', d4:'-', d5:'can'},
                                    {hour: '12:00', d1: 'Ac', d2: 'ssc', d3:'pg', d4:'-', d5:'can'},
                                    {hour: '14:00', d1: 'Ac', d2: 'ssc', d3:'pg', d4:'-', d5:'can'},
                                    {hour: '16:00', d1: 'Ac', d2: 'ssc', d3:'pg', d4:'-', d5:'can'},
                                    {hour: '18:00', d1: 'Ac', d2: 'ssc', d3:'pg', d4:'-', d5:'can'},]}
                        tableHeader={['      ','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                        tableTitle={'Schedule'}/>;
  }
}


Schedule.propTypes = {
  fetchSchedule: PropTypes.func.isRequired,
  schedule: PropTypes.array.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  schedule: scheduleSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchSchedule: (username, role) => dispatch(fetchSchedule(username, role)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'schedulePage', saga });
const withReducer = injectReducer({ key: 'schedulePage', reducer });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Schedule);
