import React from 'react';
import { connect } from 'react-redux';
import { selectStudent } from '../store/actions/student-management';

const GridRow = ({dispatch, rowData}) => {
  return (
		<tr key={rowData['id']} onClick={() => dispatch(selectStudent(rowData))}>
			{ Object.keys(rowData).map( col => {
				if(col !== 'id'){
					return <td key={rowData['id'] + col}>{ rowData[col] }</td>
				}
			}
			)}
		</tr>
  )
}

export default connect()(GridRow)
 