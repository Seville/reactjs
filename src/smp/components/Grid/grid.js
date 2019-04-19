import React from 'react';
import GridHeaders from '../GridHeaders/gridHeaders';
import GridRows from '../GridRows/gridRows';

const Grid = ({gridHeaders, gridRows, rowType}) => (
	<table>
		<tbody>
			<GridHeaders headers={gridHeaders}/>
			<GridRows rows={gridRows} type={rowType}/>
		</tbody>
	</table>
)

export default Grid;
