import { newStudentFormConfig } from '../../../constants/newStudentFormConfig.js';
import { editStudentFormConfig } from '../../../constants/editStudentFormConfig.js';

const initialState = {
	formConfig: null,
	selectedData: null
};

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SHOW_EDIT_FORM':
			let editFormData = {
				formConfig: editStudentFormConfig,
				selectedData: action.selectedRow
			}
			return editFormData;
		case 'SHOW_NEW_FORM':
			let newFormData = {
				formConfig: newStudentFormConfig
			}
			return newFormData;
		case 'HIDE_FORM':
			return initialState;
		default:
			return state
	}
}

export default formReducer;
