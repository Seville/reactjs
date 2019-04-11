import { combineReducers } from 'redux';
import studentReducer from './student-reducer';
import gridReducer from './grid-reducer';

export default combineReducers({
	studentReducer,
	gridReducer
});
