import React, { Component } from 'react';

let AppContext = React.createContext();

class AppProvider extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			store: 'Walmart'
		};
	}
	
	render(){
		return <AppContext.Provider value={this.state}>{ this.props.children }</AppContext.Provider>
	}
}

export { AppContext, AppProvider };
