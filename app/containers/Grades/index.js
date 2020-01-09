import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplayPage from "../../components/DisplaySubjectPage";
import {errorSelector, gradesSelector} from "./selectors";
import {fetchGrades} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';
import CustomLoader from "../../components/LoaderComponent";


class Grades extends React.Component {
  componentDidMount() {
    this.props.fetchGrades();
  }

  render() {
    if (typeof this.props.grades !== 'undefined' && this.props.grades.length !== 0) {
      const { student } = this.props.grades[0];
      let { grades } = this.props;
      grades = grades.map((gradeData) => { return { date: gradeData.date,
                                                    grade: gradeData.grade,
                                                    professor: gradeData.teaching.professor.firstName + " " + gradeData.teaching.professor.lastName,
                                                    subject: gradeData.teaching.class_name.subject.name,
                                                    type: gradeData.teaching.class_name.type,
                                                    year: gradeData.teaching.class_name.subject.year,
                                                    semester: gradeData.teaching.class_name.subject.semester,
                                                    credits: gradeData.teaching.class_name.subject.credits,
                                                    } });
      const tableHeader = Object.keys(grades[0]).map((attribute) => attribute.charAt(0).toUpperCase() + attribute.slice(1));
      const firstYear = _.orderBy(grades.filter(grades => grades.year === 1), ['semester'], ['asc']);
      const secondYear =  _.orderBy(grades.filter(grades => grades.year === 2), ['semester'], ['asc']);
      const thirdYear =  _.orderBy(grades.filter(grades => grades.year === 3), ['semester'], ['asc']);
      const forthYear =  _.orderBy(grades.filter(grades => grades.year === 4), ['semester'], ['asc']);


      return <DisplayPage error=''
                          fields={[
                            {
                              id: 'firstName',
                              value: student.firstName,
                              label: 'First Name:',
                            },
                            {
                              id: 'lastName',
                              value: student.lastName,
                              label: 'Last Name:',
                            }
                          ]}
                          firstYear={firstYear}
                          secondYear={secondYear}
                          thirdYear={thirdYear}
                          forthYear={forthYear}
                          tableHeader={tableHeader}
                          tableTitle={'Grades'}
                          icon={'five'}/>;
    } else {
      return(
        <CustomLoader />
      );
    }
  }
}


Grades.propTypes = {
  fetchGrades: PropTypes.func.isRequired,
  grades: PropTypes.array,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  grades: gradesSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchGrades: () => dispatch(fetchGrades()),
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
