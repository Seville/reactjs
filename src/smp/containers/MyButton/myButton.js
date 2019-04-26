import React from 'react';
import { connect } from 'react-redux';

const MyButton = ({dispatch, textVal, callBack, callBackProp}) => (
	<button onClick={(evt) => { 
		evt.preventDefault();
		dispatch(callBack(callBackProp))
	}}>{textVal}</button>
)

export default connect()(MyButton);
