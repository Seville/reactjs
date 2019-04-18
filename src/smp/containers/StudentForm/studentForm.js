import { connect } from 'react-redux';
import MyForm from '../../components/MyForm/myForm';
import { hideForm } from '../../store/actions/form-display';
import { addStudent } from '../../store/actions/student-management';

const mapStateToProps = state => ({
	formData: state.formReducer
});

/*const mapDispatchToProps = (dispatch, ownProps) => ({
	onCancel: () => dispatch(hideForm());
});*/

export default connect(
	mapStateToProps
)(MyForm)
