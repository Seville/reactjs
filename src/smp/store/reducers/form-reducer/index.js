import { newStudentFormConfig } from '../../../constants/newStudentFormConfig.js';
import { editStudentFormConfig } from '../../../constants/editStudentFormConfig.js';

const initialState = {
	formConfig: null,
	selectedData: null
};

let getFormConfig = (rowType, selectedRow, operation) => {
	if(rowType === 'student' && operation === 'edit'){
		return {
			formConfig: editStudentFormConfig,
			selectedData: selectedRow
		}
	}
	if(rowType === 'student' && operation === 'new'){
		return {
			formConfig: newStudentFormConfig
		}
	}
}

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SHOW_EDIT_FORM':
			return getFormConfig(action.rowType, action.selectedRow, 'edit');
		case 'SHOW_NEW_FORM':
			return getFormConfig(action.rowType, null, 'new');
		case 'HIDE_FORM':
			return initialState;
		default:
			return state
	}
}

export default formReducer;
