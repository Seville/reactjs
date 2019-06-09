import React from 'react'

const GridHeaders = ({headers}) => (
	<tr>
		{ headers.map(header => <th key={header}>{ header }</th> )}
	</tr>
);

export default GridHeaders;
