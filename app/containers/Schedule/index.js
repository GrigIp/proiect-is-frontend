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
import  CustomLoader  from '../../components/LoaderComponent/index.js';
import { buildHourArray} from '../../utils/utils.js';

const buildDaysReducer = (day) => {
  return (r, e) => {
    if (e.day === day) {
      r.push(e);
    }

    return r;
  };
};

class Schedule extends React.Component {
  componentWillMount() {
    const { sub: username, roles: role } = jwt_decode(localStorage.getItem('token'));
    this.props.fetchSchedule(username, role);
  }

  render() {
    if(Array.isArray(this.props.schedule) && this.props.schedule.length) {
      const { schedule, error } = this.props;
      const {scheduleId: { group : {id, seriesID, year, faculty} }} = schedule[0];
      const mon = schedule.reduce(buildDaysReducer("MONDAY"), []);
      const tue = schedule.reduce(buildDaysReducer("TUESDAY"), []);
      const wed = schedule.reduce(buildDaysReducer("WEDNESDAY"),[]);
      const thu = schedule.reduce(buildDaysReducer("THURSDAY"),[]);
      const fry = schedule.reduce(buildDaysReducer("FRIDAY"),[]);
      const fromEight = buildHourArray(mon, tue, wed, thu, fry, '08');
      const fromTen = buildHourArray(mon, tue, wed, thu, fry, '10');
      const fromTwelve = buildHourArray(mon, tue, wed, thu, fry, '12');
      const fromTwo = buildHourArray(mon, tue, wed, thu, fry, '14');
      const fromFour = buildHourArray(mon, tue, wed, thu, fry, '16');
      const fromSix = buildHourArray(mon, tue, wed, thu, fry, '18');

      return <DisplaySchedule error= ''
                              fields={[
                                {
                                  id: 'group',
                                  value: id,
                                  label: 'Group:',
                                },
                                {
                                  id: 'series',
                                  value: seriesID,
                                  label: 'Series:',
                                },
                                {
                                  id: 'year',
                                  value: year,
                                  label: 'Year:',
                                },
                                {
                                  id: 'faculty',
                                  value: faculty,
                                  label: 'Faculty:',
                                }
                              ]}
                              fromEight = {fromEight}
                              fromTen = {fromTen}
                              fromTwelve = {fromTwelve}
                              fromTwo = {fromTwo}
                              fromFour = {fromFour}
                              fromSix = {fromSix}
                              tableHeader={['      ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                              tableTitle={'Schedule'}/>;
    } else {
      return(
       <CustomLoader />
      );
    }
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
