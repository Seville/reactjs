import { combineReducers } from 'redux';
import studentReducer from './student-reducer';
import formReducer from './form-reducer';

export default combineReducers({
	studentReducer,
	formReducer
});
