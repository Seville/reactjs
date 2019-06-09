import { newStudentFormConfig } from '../../../configs/newStudentFormConfig';
import { editStudentFormConfig } from '../../../configs/editStudentFormConfig';
import * as types from '../../../constants/form-constants';

const initialState = {
	formConfig: null,
	selectedData: null
};

const isEqual = (a, b) => (
	JSON.stringify(a) === JSON.stringify(b)
)

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.SHOW_EDIT_FORM:
			if(isEqual(state.formConfig, editStudentFormConfig)){
				return { ...state, selectedData: action.selectedRow }
			} else {
				return {...state, formConfig: editStudentFormConfig, selectedData: action.selectedRow }
			}
		case types.SHOW_NEW_FORM:
			return { ...state, formConfig: newStudentFormConfig, selectedData: action.selectedRow }
		case types.HIDE_FORM:
			return initialState;
		default:
			return state
	}
}

export default formReducer;
