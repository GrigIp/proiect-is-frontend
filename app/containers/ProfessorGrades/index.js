import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplayPage from "../../components/DisplayProfessorGrades";
import {errorSelector, gradeSelector, gradesSelector} from "./selectors";
import {fetchGrades, createGrade} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';
import CustomLoader from "../../components/LoaderComponent";
import SnackBar from "../../components/Snackbar";


class Grades extends React.Component {
  createGrade({ name, classId, date, grade }){
    const username = name;

    this.props.createGrade(username, classId, date, grade);
  }
  componentDidMount() {
    this.props.fetchGrades();
  }

  render() {
    if (typeof this.props.grades !== 'undefined' && this.props.grades.length !== 0) {
      const { teaching: { professor }} = this.props.grades[0];
      let { grades } = this.props;

      const namesData = grades.map((gradeData) => { return {
                                                    classId: gradeData.teaching.class_name.id,
                                                    name: gradeData.student.firstName + " " + gradeData.student.lastName,
                                                    username: gradeData.student.username
                                                    } });
      if (this.props.grade) {
        return (<div>
          <SnackBar variant="success" message={'Inserted'}/>
          <DisplayPage submit={params => this.createGrade(params)} namesData={namesData}/>;
        </div>);
      } else {
        return <DisplayPage submit={params => this.createGrade(params)} namesData={namesData}/>;
      }
    } else {
      return(
        <CustomLoader />
      );
    }
  }
}


Grades.propTypes = {
  fetchGrades: PropTypes.func.isRequired,
  createGrade: PropTypes.func.isRequired,
  grades: PropTypes.array,
  grade: PropTypes.object,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  grades: gradesSelector,
  grade: gradeSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchGrades: () => dispatch(fetchGrades()),
  createGrade: (username, classId, date, grade) =>
    dispatch(createGrade(username, classId, date, grade))
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
