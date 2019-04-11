import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import studentReducer from './smp/store/reducers/student-reducer';
import App from './smp/app';
import './resources/main.css';

const store = createStore(studentReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
