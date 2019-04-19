import { connect } from 'react-redux';
import Grid from '../../components/Grid/grid.js';

const mapStateToProps = state => ({
	gridHeaders: state.studentReducer.headers,
	gridRows: state.studentReducer.data,
	rowType: state.studentReducer.rowType
});

export default connect(
	mapStateToProps
)(Grid)
