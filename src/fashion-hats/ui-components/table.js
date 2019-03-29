import React from 'react';

let Table = (props) => {
	let tableName = props.tblData.tblname;
	
	if(!props.show){
		return '';
	} else {
		return <table>
			<tbody>
				<tr>
					{ props.tblData.headers.map( (header, i) => <th key={tableName+'-header-'+i}>{ header }</th>) }
				</tr>
				{ props.tblData.data.map((item, indx) => 
					<tr key={tableName+'-row-'+indx} onClick={() => props.onEdit(item)}>
						{ Object.keys(item).map((key, ind) => 
							<td key={tableName+'-cell-'+key+'-'+ind}>{ item[key] }</td>
						)}
					</tr> )
				}
			</tbody>
		</table>
	}
};
export default Table;
