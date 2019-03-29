import React from 'react';

export default class SearchCustomerForm extends React.Component {
	render() {
		if(!this.props.show) {
			return (<div></div>)
		} else {
			return (
				<form name="search_form">
					<div>Search Record</div>
					<div className="inputBox">
						<label htmlFor="search">First name</label>
						<input type="text" id="search" name="search" onKeyPress={(e) => this.props.onClick(e)}/>
					</div>
					<div className="inputBox">
						<input type="button" className="btn" onClick={(e) => this.props.onClick(e)} value="Search for by name"/>
					</div>
				</form>
			)
		}
	}
};