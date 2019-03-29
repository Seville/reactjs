import React from 'react';
import MESSAGE_CONSTANT from '../constants/message_constants';

let RestStatus = (props) => {
	if(props.result.error) {
		return (<div>{ props.result.error }</div>);
	}
		
	if(props.result.success){
		return (<div>{ props.result.success }</div>);
	}
		
	if(props.result.noresult) {
		return (<div>{ MESSAGE_CONSTANT.noResultsMsg }</div>);
	}
		
	return <div></div>;
};

export default RestStatus;
