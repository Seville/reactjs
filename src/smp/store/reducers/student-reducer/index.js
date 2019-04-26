import jQ from 'jquery';
import objectMapper from 'object-mapper';
import SEED_DATA from '../../../seed-data/customer_info';
import { studentFormMap } from '../../../mappers/formMapper';

const initialState = SEED_DATA;

let formDataToObject = (formName) => {
	let formData = {};
	let formSerialize = jQ(`#${formName}-student`).serialize();
		let formList = formSerialize.split('&');
		for(let input of formList){
			let formEntity = input.split('=');
			formData[formEntity[0]] = formEntity[1];
		}
	return formData;
}

let setUpdatedStudentInfo = (state, id, formName) => {
	let updatedFormData = formDataToObject(formName);
	for(let item in state['data']){
		if(state['data'][item].id === id){
			let updatedStudentData = objectMapper(updatedFormData, studentFormMap);
			state['data'][item] = updatedStudentData;
		}
	}
	return state;
}

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
			return { ...state }
		case 'DELETE_STUDENT':
			return { ...state }
		case 'EDIT_STUDENT':
			let updatedStudentInfo = setUpdatedStudentInfo(action.formName);
			return { ...state }
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;