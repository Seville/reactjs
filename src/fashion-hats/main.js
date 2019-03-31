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
			custList: {},
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
	resetProps = ButtonEvents.resetProps;
	
	// Customer Operations
	updateAccount = CustomerEvents.updateAccount;
	addAccount = CustomerEvents.addAccount;
	
	componentWillMount(){
		this.setState({
			custList: SEED_DATA
		})
	}
	
	componentDidMount(){
		this.clone = { ...this.state };
		this.setState({
			isTable: true
		});
	}
	
	render(){
		return <div>
					<section>
						<button className="btn" onClick={() => this.showTable()}>Show all</button>&nbsp;
						<button className="btn" onClick={() => this.showAddForm()}>Add record</button>&nbsp;
						<button className="btn" onClick={() => this.showSearchForm()}>Search</button>
					</section>
				
					<Table
						show={this.state.isTable}
						tblData={this.state.custList}
						onEdit={(item) => this.showEditForm(item)}
					/>
					
					<AddCustomerForm show={this.state.isAdd} addRecord={(e, addData) => this.addAccount(e, addData)} />
					
					<SearchCustomerForm show={this.state.isSearch} onClick={(e) => this.searchByName(e)} />
					
					<EditCustomerForm 
						show={this.state.isEdit} 
						selected={this.state.selected} 
						updateRecord={(e, updData) => this.updateAccount(e, updData)}
					/>
				
			   </div>
	}
}
