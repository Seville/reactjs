import React from 'react';

const Link = ({ active, children, onClick }) => (
	<button
		onClick={onClick}
		style={{
			marginLeft: '4px'
		}}
	>
		{children}
	</button>
)

export default Link;
