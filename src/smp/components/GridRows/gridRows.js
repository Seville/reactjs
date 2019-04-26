import React from 'react'
import GridRow from '../../containers/GridRow/gridRow';

const GridRows = ({rows}) => 
	rows.map(row => 
		<GridRow 
			key={row['id']+"stnd-row"} 
			rowData={row}
		/>
	);
	
export default GridRows;
