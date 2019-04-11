import { connect } from 'react-redux';
import GridRows from '../components/gridRows.js';
import { editStudent } from '../store/actions/student-management';

const mapDispatchToProps = (dispatch, ownProps) => ({
	onTouch: (student) => { console.log(student)}
});

export default connect(
	mapDispatchToProps
)(GridRows)
