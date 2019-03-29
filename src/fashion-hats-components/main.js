import React, { Component } from 'react';
import { AppProvider, AppContext }  from '../app-context';
import ButtonGroup from './ui-components/button-group';
import AdminEditButtons from './ui-components/admin-buttons';

export default class Main extends React.Component{
	render(){
		return <AppProvider>
			<div>
				<ButtonGroup buttonList={ AdminEditButtons }/>
			</div>
		</AppProvider>
	}
}
