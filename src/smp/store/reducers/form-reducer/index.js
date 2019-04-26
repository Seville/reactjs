import { newStudentFormConfig } from '../../../configs/newStudentFormConfig';
import { editStudentFormConfig } from '../../../configs/editStudentFormConfig';
import { SHOW_EDIT_FORM } from '../../../constants/formConstants';
import { SHOW_NEW_FORM } from '../../../constants/formConstants';
import { HIDE_FORM } from '../../../constants/formConstants';

const initialState = {
	formConfig: null,
	selectedData: null
};

const isEqual = (a, b) => (
	JSON.stringify(a) === JSON.stringify(b)
)

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case SHOW_EDIT_FORM:
			if(isEqual(state.formConfig, editStudentFormConfig)){
				return { ...state, selectedData: action.selectedRow }
			} else {
				return {...state, formConfig: editStudentFormConfig, selectedData: action.selectedRow }
			}
		case SHOW_NEW_FORM:
			return { ...state, formConfig: newStudentFormConfig, selectedData: action.selectedRow }
		case HIDE_FORM:
			return initialState;
		default:
			return state
	}
}

export default formReducer;
