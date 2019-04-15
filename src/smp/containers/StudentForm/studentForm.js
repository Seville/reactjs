import { connect } from 'react-redux';
import MyForm from '../../components/MyForm/myForm';

const mapStateToProps = state => ({
	formData: state.formReducer.formConfig
});

export default connect(
	mapStateToProps
)(MyForm)
