import { newStudentFormConfig } from '../../../configs/newStudentFormConfig';
import { editStudentFormConfig } from '../../../configs/editStudentFormConfig';
import { SHOW_EDIT_FORM } from '../../../constants/formActionConstants';
import { SHOW_NEW_FORM } from '../../../constants/formActionConstants';
import { HIDE_FORM } from '../../../constants/formActionConstants';

const initialState = {
	formConfig: null,
	selectedData: null
};

let getFormConfig = (rowType, operation) => {
	if(rowType === 'student' && operation === 'edit'){
		return {
			formConfig: editStudentFormConfig
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
		case SHOW_EDIT_FORM:
			let editFormConfig = getFormConfig(action.rowType, 'edit');
			if(state.formConfig && state.formConfig.submitId === 'edit-student-submit'){
				return Object.assign({}, state, { selectedData: action.selectedRow });
			} else {
				return { ...state, ...editFormConfig, selectedData: action.selectedRow };
			}
		case SHOW_NEW_FORM:
			let newFormConfig = getFormConfig(action.rowType, 'new');
			return Object.assign({}, state, newFormConfig, { selectedData: null });
		case HIDE_FORM:
			return initialState;
		default:
			return state
	}
}

export default formReducer;
