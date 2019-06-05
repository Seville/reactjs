import { connect } from 'react-redux'
import MyForm from '../../components/MyForm/my-form'

const mapStateToProps = state => ({
	formData: state.formReducer.formConfig,
	selectedData: state.formReducer.selectedData
})

export default connect(
	mapStateToProps
)(MyForm)