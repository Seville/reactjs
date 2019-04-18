import { connect } from 'react-redux';
import MyForm from '../../components/MyForm/myForm';
import { hideForm } from '../../store/actions/form-display';
import { addStudent } from '../../store/actions/student-management';

const mapStateToProps = state => ({
	formData: state.formReducer.formConfig,
	selectedData: state.formReducer.selectedData
});

export default connect(
	mapStateToProps
)(MyForm)
