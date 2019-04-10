import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Main from './school/main';
import './resources/main.css';

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);