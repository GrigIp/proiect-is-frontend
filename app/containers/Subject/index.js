import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplayPage from "../../components/DisplaySubjectPage";
import {errorSelector, subjectsSelector} from "./selectors";
import {fetchSubject} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';
import CustomLoader from "../../components/LoaderComponent";

class Subject extends React.Component {

  componentDidMount() {
    const { roles: role } = jwt_decode(localStorage.getItem('token'));

    this.props.fetchSubject(role);
  }

  render() {
    if (typeof this.props.subjects !== 'undefined' && this.props.subjects.length !== 0) {
      let { subjects } = this.props;
      const tableHeader = Object.keys(subjects[0]).map((attribute) => attribute.charAt(0).toUpperCase() + attribute.slice(1));
      const firstYear = _.orderBy(subjects.filter(subject => subject.year === 1), ['semester'], ['asc']);
      const secondYear =  _.orderBy(subjects.filter(subject => subject.year === 2), ['semester'], ['asc']);
      const thirdYear =  _.orderBy(subjects.filter(subject => subject.year === 3), ['semester'], ['asc']);
      const forthYear =  _.orderBy(subjects.filter(subject => subject.year === 4), ['semester'], ['asc']);

      return <DisplayPage error=''
                          fields={[]}
                          firstYear={firstYear}
                          secondYear={secondYear}
                          thirdYear={thirdYear}
                          forthYear={forthYear}
                          tableHeader={tableHeader}
                          tableTitle={'Subjects'}/>;
    } else {
      return(
        <CustomLoader />
      );
    }
  }
}


Subject.propTypes = {
  fetchSubject: PropTypes.func.isRequired,
  subjects: PropTypes.array,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  subjects: subjectsSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchSubject: (role) => dispatch(fetchSubject(role)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'subjectsPage', saga });
const withReducer = injectReducer({ key: 'subjectsPage', reducer });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Subject);

