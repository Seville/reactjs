import React from 'react'
import GridRow from '../../containers/GridRow/gridRow';

const GridRows = ({rows, type}) => 
	rows.map(row => 
		<GridRow 
			key={row['id']+"stnd-row"} 
			rowData={row}
			rowType={type}
		/>
	);
	
export default GridRows;
