import React from 'react';
import CONSTANTS from '../constants';

export default class RestStatus extends React.Component {
	render() {
		if(this.props.result.error) {
			return (<div>{this.props.result.error}</div>);
		}
		
		if(this.props.result.success){
			return (<div>{this.props.result.success}</div>);
		}
		
		if(this.props.result.noresult) {
			return (<div>{CONSTANTS.noResultsMsg}</div>);
		}
		
		return <div></div>;
	}
}