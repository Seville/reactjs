import React, { Component } from 'react';

let AppContext = React.createContext();

class AppProvider extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			store: 'Walmart',
			displayVal: function(){
				console.log(this);
				alert('Hello');
			},
			displayKey: function(){
				alert('Ok');
			}
		};
	}
	
	render(){
		return <AppContext.Provider value={this.clone}>{ this.props.children }</AppContext.Provider>
	}
}

export { AppContext, AppProvider };
