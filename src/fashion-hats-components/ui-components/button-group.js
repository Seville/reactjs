import React, { Component } from 'react';

export default ButtonGroup extends React.Component{
	render(){
		return (
			{ this.props.buttonList.map((button) => 
				<button className='btn' onClick={button.callBack}>{button.text}</button>
			)}
		)
	}
}