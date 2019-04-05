import React, { Component } from 'react';

import CustomerEvents from '../events/customer_events';

export default class CustomerTable extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			custTableData: {}
		}
	}
	
	loadCustomerList = CustomerEvents.loadCustomerList;
	
	componentWillMount(){
		this.loadCustomerList();
	}
	
	render(){
		return <div className="student-table">
			{ this.props.render(this.state.custTableData) }
		</div>
	}
}