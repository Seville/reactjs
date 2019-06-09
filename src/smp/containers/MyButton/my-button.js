import React from 'react';
import { connect } from 'react-redux';

const MyButton = ({dispatch, callback, callbackprop, ...props}) => (
	<button { ...props } onClick={(evt) => { 
		evt.preventDefault();
		dispatch(callback(callbackprop || null))
	}}>{props.textval}</button>
)

export default connect()(MyButton);
