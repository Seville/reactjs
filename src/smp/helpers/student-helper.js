import jQ from 'jquery';
import objectMapper from 'object-mapper';
import isValid from '../validations/StudentValidator/student-validator';
import { studentFormMap } from '../mappers/form-mapper';

export let formDataToObject = (formName) => {
	let formData = {};
	let formSerialize = jQ(`#${formName}`).serialize();
	let formList = formSerialize.split('&');
	for(let input of formList){
		let formEntity = input.split('=');
		if(formEntity[1] !== ''){
			formData[formEntity[0]] = formEntity[1];
		}
	}
	
	let mappedObject = objectMapper(formData, studentFormMap);
	
	if(isValid(mappedObject)){
		return mappedObject;
	} else {
		return null;
	}
}
