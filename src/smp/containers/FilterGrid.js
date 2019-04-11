import { connect } from 'react-redux';
import { showAllStudents } from '../store/actions/student-management';
import Grid from '../components/grid.js';

const mapStateToProps = state => ({
	gridHeaders: state.studentList.headers,
	gridRows: state.studentList.data
});

export default connect(
	mapStateToProps
)(Grid)
