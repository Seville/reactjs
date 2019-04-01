import React from 'react';
import { AppProvider, AppContext }  from './app_context';
import AddCustomerForm from './forms/add_customer_record';
import SearchCustomerForm from './forms/search_customer_record';
import EditCustomerForm from './forms/edit_customer_record';
import Table from './ui-components/table';
import RestStatus from './services/rest_status';
import ButtonEvents from './events/button_events';
import CustomerEvents from './events/customer_events';
import SEED_DATA from './seed-data/customer_info'

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isEdit: false,
			isSearch: false,
			isAdd: false,
			isTable: false,
			isLoaded: false,
			custTableData: {},
			tableData: {},
			result: {error: null, success: null, noresult: null},
			selected: null,
		};
		this.clone = {};
	}
	
	// Button Interactions
	showAddForm = ButtonEvents.showAddForm;
	showSearchForm = ButtonEvents.showSearchForm;
	showEditForm = ButtonEvents.showEditForm;
	showTable = ButtonEvents.showTable;
	showAll = ButtonEvents.showAll;
	resetProps = ButtonEvents.resetProps;
	
	// Customer Operations
	updateAccount = CustomerEvents.updateAccount;
	addAccount = CustomerEvents.addAccount;
	searchList = CustomerEvents.searchList;
	
	componentWillMount(){
		this.setState({
			custTableData: SEED_DATA,
			tableData: SEED_DATA,
		})
	}
	
	componentDidMount(){
		this.clone = { ...this.state };
		delete this.clone["custTableData"];
		delete this.clone["tableData"];
		this.setState({
			isTable: true
		});
	}
	
	render(){
		return <div>
					<section>
						<button className="btn" onClick={() => this.showAll()}>Show all</button>&nbsp;
						<button className="btn" onClick={() => this.showAddForm()}>Add record</button>&nbsp;
						<button className="btn" onClick={() => this.showSearchForm()}>Search</button>
					</section>
				
					<Table
						show={this.state.isTable}
						tblData={this.state.tableData}
						onEdit={(item) => this.showEditForm(item)}
					/>
					
					<AddCustomerForm show={this.state.isAdd} addRecord={(e, addData) => this.addAccount(e, addData)} />
					
					<SearchCustomerForm show={this.state.isSearch} search={(e, prop, val) => this.searchList(e, prop, val)} />
					
					<EditCustomerForm 
						show={this.state.isEdit} 
						selected={this.state.selected} 
						updateRecord={(e, updData) => this.updateAccount(e, updData)}
					/>
				
			   </div>
	}
}
