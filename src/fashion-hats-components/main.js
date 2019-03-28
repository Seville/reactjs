import React, { Component } from 'react';
import { AppProvider, AppContext }  from '../app-context';

export default class Main extends React.Component{
	render(){
		return <AppProvider>
			<div><AppContext.Consumer>
					{ (context) => <div>{ context.store }</div> }
				</AppContext.Consumer>
			</div>
		</AppProvider>
	}
}
