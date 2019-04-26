import React from 'react';
import GridHeaders from '../GridHeaders/gridHeaders';
import GridRows from '../GridRows/gridRows';

const Grid = ({gridHeaders, gridRows}) => (
	<table>
		<tbody>
			<GridHeaders headers={gridHeaders}/>
			<GridRows rows={gridRows}/>
		</tbody>
	</table>
)

export default Grid;
