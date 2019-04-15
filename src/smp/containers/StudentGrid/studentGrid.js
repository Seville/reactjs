import { connect } from 'react-redux';
import Grid from '../../components/Grid/grid.js';

const mapStateToProps = state => ({
	gridHeaders: state.studentReducer.studentList.headers,
	gridRows: state.studentReducer.studentList.data
});

export default connect(
	mapStateToProps
)(Grid)
