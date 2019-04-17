import { connect } from 'react-redux';
import MyButton from '../../components/MyButton/myButton';
import { hideForm } from '../../store/actions/form-display';

const mapStateToProps = (state, ownProps) => ({
	text: ownProps.text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	callBack: () => dispatch(ownProps.onCancel())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyButton);