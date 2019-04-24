import jQ from 'jquery';
import objectMapper from 'object-mapper';
import { studentMap } from './mappers/studentMapper';
import SEED_DATA from '../../../seed-data/customer_info';

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
			let updatedStudentData = objectMapper(updatedFormData, studentMap);
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
			const updateData = [ ...state.data ];
			let updatedFormData = formDataToObject(action.formName);
			for(let item in updateData){
				if(updateData[item]['id'] === action.id){
					let updatedStudentData = objectMapper(updatedFormData, studentMap);
					updateData[item] = updatedStudentData;
				}
			}
			return {...state, data: updateData}
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;