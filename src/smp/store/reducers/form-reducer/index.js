import { newStudentFormConfig } from '../../../constants/newStudentFormConfig.js';
import { editStudentFormConfig } from '../../../constants/editStudentFormConfig.js';

const initialState = null;

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SHOW_EDIT_FORM':
			return editStudentFormConfig;
		case 'SHOW_NEW_FORM':
			return newStudentFormConfig;
		case 'HIDE_FORM':
			return null;
		default:
			return state
	}
}

export default formReducer;
