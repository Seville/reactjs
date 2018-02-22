import React from 'react';

export default class SearchRecordForm extends React.Component {
	render() {
		if(!this.props.show) {
			return (<div></div>)
		} else {
			return (
				<div>
					<div>Search Record</div>
					<form name="search_form">
						<div className="inputBox">
							<label htmlFor="search">First name</label>
							<input type="text" id="search" name="search" onKeyPress={(e) => this.props.onClick(e)}/>
						</div>
						<div className="inputBox">
							<input type="button" onClick={(e) => this.props.onClick(e)} value="Search for by name"/>
						</div>
					</form>
				</div>
			)
		}
	}
};