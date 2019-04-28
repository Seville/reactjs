import jQ from 'jquery';
import objectMapper from 'object-mapper';
import SEED_DATA from '../../../seed-data/customer_info';
import { studentFormMap } from '../../../mappers/formMapper';

const initialState = SEED_DATA;

let formDataToObject = (formName) => {
	let formData = {};
	let formSerialize = jQ(`#${formName}`).serialize();
	let formList = formSerialize.split('&');
	for(let input of formList){
		let formEntity = input.split('=');
		if(formEntity[1] !== ''){
			formData[formEntity[0]] = formEntity[1];
		}
	}
	return formData;
}



const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
			let dataClone = [ ...state['data'] ];
			let newFormData = formDataToObject(action.formName);
			let largestIndex = 0;
			for(let item of dataClone){
				if(item['id'] > largestIndex){
					largestIndex = item['id'];
				}
			}
			let newStudentData = objectMapper(newFormData, studentFormMap);
			newStudentData['id'] = largestIndex + 1;
			dataClone.push(newStudentData);
			return { ...state, data: dataClone };
		case 'DELETE_STUDENT':
			return { ...state }
		case 'EDIT_STUDENT':
			let dataClone2 = [ ...state['data'] ];
			let updatedFormData = formDataToObject(action.formName);
			for(let item in dataClone2){
				if(dataClone2[item].id === action.id){
					let updatedStudentData = objectMapper(updatedFormData, studentFormMap);
					dataClone2[item] = { ...dataClone2[item], ...updatedStudentData };
				}
			}
			return {...state, data: dataClone2 };
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;