import React from 'react';
import { connect } from 'react-redux';
import { showEditForm } from '../../store/actions/form-display';

const GridRow = ({dispatch, rowData}) => (
	<tr key={rowData['id']} onClick={() => dispatch(showEditForm())}>
		{ 
			Object.keys(rowData).map(col => {
				if(col !== 'id'){
					return <td key={rowData['id'] + col}>{ rowData[col] }</td>
				} else {
					return null;
				}
			})
		}
	</tr>
 )

export default connect()(GridRow)
 