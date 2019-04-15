import React from 'react'

const GridRow = ({rowData}) => ( 
		<tr key={rowData['id']} onClick={(rowData) => onClick(rowData)}>
			{ Object.keys(rowData).map( col => {
				if(col !== 'id'){
					return <td key={rowData['id'] + col}>{ rowData[col] }</td>
				}
			}
			)}
		</tr>
	);
	
export default GridRow;
