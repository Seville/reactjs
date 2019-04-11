import { connect } from 'react-redux';
import { showAllStudents } from '../store/actions/student-management';
import Link from '../components/Link.js';

/*const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});*/

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(showAllStudents())
})

export default connect(
	mapDispatchToProps
)(Link)
