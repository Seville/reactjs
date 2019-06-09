import * as types from '../../../constants/student-constants';
import * as formConstants from '../../../constants/form-constants';

let studentDataUrl = '/seed-data/';

export const addStudent = () => ({
	type: types.ADD_STUDENT,
	formName: formConstants.NEW_STUDENT_FORMNAME
});

export const deleteStudent = id => ({
	type: types.DELETE_STUDENT,
	id
});

export const editStudent = (id) => ({
	type: types.EDIT_STUDENT,
	formName: formConstants.EDIT_STUDENT_FORMNAME,
	id
});

export const selectStudent = student => ({
	type: types.SELECT_STUDENT,
	student
});

export const connectToApi = () => ({
	type: types.CONNECT_TO_API
})

export const getStudentDataSuccess = (studentList) => ({
	type: types.GET_STUDENT_DATA_SUCCESS,
	studentList
})

export const getStudentDataFailure = (error) => ({
	type: types.GET_STUDENT_DATA_FAILURE,
	error
})

export const getStudentData = function(){
	return dispatch => {
		dispatch(connectToApi());
		return fetch(studentDataUrl)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(getStudentDataSuccess(json.list))
			})
			.catch(error => dispatch(getStudentDataFailure(error)))
	}
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
