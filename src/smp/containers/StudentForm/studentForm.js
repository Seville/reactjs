import { connect } from 'react-redux';
import MyForm from '../../components/MyForm/myForm';
import { hideForm } from '../../store/actions/form-display';

const mapStateToProps = state => ({
	formData: state.formReducer,
});

const mapDispatchToProps = dispatch => ({
	onCancel: (e) => dispatch(hideForm())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyForm)
