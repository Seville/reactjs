import { NAME_REGEX, NAME_FIELD_ERROR, AGE_REGEX, AGE_FIELD_ERROR, GENDER_REGEX, GENDER_FIELD_ERROR } from '../../constants/formConstants';

const isValid = (studentObj) => {
	let errorStr = 'Please address these errors: \n';
	let valid = true;
	if( studentObj['stndFname'] && !NAME_REGEX.test(studentObj['stndFname']) ){
		errorStr += NAME_FIELD_ERROR +'\n';
		valid = false;
	}
	if( studentObj['stndLname'] && !NAME_REGEX.test(studentObj['stndLname']) ){
		errorStr += NAME_FIELD_ERROR +'\n';
		valid = false;
	}
	if( studentObj['stndAge'] && !AGE_REGEX.test(studentObj['stndAge']) ){
		errorStr += AGE_FIELD_ERROR +'\n';
		valid = false;
	}
	if(studentObj['stndGender'] && !GENDER_REGEX.test(studentObj['stndGender'])){
		errorStr += GENDER_FIELD_ERROR +'\n';
		valid = false;
	}
	
	if(!valid){
		window.alert(errorStr);
	}
	
	return valid;
}

export default isValid;