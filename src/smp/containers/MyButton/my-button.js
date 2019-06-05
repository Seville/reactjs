import React from 'react';
import { connect } from 'react-redux';

const MyButton = ({dispatch, ...props}) => (
	<button { ...props } onClick={(evt) => { 
		evt.preventDefault();
		dispatch(props.callBack(props.callBackProp))
	}}>{props.textVal}</button>
)

export default connect()(MyButton);
