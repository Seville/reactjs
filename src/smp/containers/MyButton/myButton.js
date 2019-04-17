import React from 'react';
import { connect } from 'react-redux';

const MyButton = ({dispatch, textVal, callBack}) => (
	<button onClick={dispatch(callBack())}>{textVal}</button>
)

export default connect()(MyButton);
