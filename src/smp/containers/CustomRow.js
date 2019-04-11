import { connect } from 'react-redux';
import GridRow from '../components/gridRows.js';

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch()
});

export default connect(
	mapDispatchToProps
)(GridRow)
