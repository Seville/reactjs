import React from 'react';
import { connect } from 'react-redux';
import { showNewForm } from '../../store/actions/form-display';

const GridRow = ({dispatch, rowData}) => (
	<tr key={rowData['id']} onClick={() => dispatch(showNewForm())}>
		{ Object.keys(rowData).map( col => {
			if(col !== 'id'){
				return <td key={rowData['id'] + col}>{ rowData[col] }</td>
			}
		}
		)}
	</tr>
 )

export default connect()(GridRow)
 