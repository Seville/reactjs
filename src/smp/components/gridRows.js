import React from 'react'

const GridRows = ({rows}) => ( 
	rows.map(row => 
		<tr key={row['id']}>
			{ Object.keys(row).map( col => {
				if(col !== 'id'){
					return <td key={row['id'] + col}>{ row[col] }</td>
				}
			}
			)}
		</tr>
	));
	
export default GridRows;
