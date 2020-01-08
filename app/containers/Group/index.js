import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DisplayPage from "../../components/DisplayPage";
import {errorSelector, groupSelector, studentsSelector} from "./selectors";
import {fetchGroup} from "./actions";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from "reselect";
import jwt_decode from 'jwt-decode';
import CustomLoader from "../../components/LoaderComponent";


class Group extends React.Component {
  componentDidMount() {
    this.props.fetchGroup();
  }

  render() {
    console.log(this.props);
    if (typeof this.props.group !== 'undefined') {
      const { group : {id, year, faculty, series}, students } = this.props;
      students.map(elem => delete elem.role);

      return <DisplayPage error=''
                          fields={[
                            {
                              id: 'group',
                              value: id,
                              label: 'Group:',
                            },
                            {
                              id: 'series',
                              value: series,
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
                          tableData={students}
                          tableHeader={['First Name', 'Last Name', 'Email', 'Username']}
                          tableTitle={'Group'}/>;
    } else {
      return(
        <CustomLoader />
      );
    }
  }
}


Group.propTypes = {
  fetchGroup: PropTypes.func.isRequired,
  group: PropTypes.object,
  students : PropTypes.array,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  group: groupSelector,
  students: studentsSelector,
  error: errorSelector,
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: () => dispatch(fetchGroup()),
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

