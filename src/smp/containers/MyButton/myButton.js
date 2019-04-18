import React from 'react';
import { connect } from 'react-redux';

const MyButton = ({dispatch, textVal, callBack}) => (
	<button 
		onClick={(evt) => {
			evt.preventDefault(); 
			dispatch(callBack()) 
		}}>{textVal}</button>
)

export default connect()(MyButton);
