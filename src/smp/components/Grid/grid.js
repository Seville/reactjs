import React from 'react';
import GridHeaders from '../GridHeaders/grid-headers';
import GridRows from '../GridRows/grid-rows';

const Grid = ({gridHeaders, gridRows}) => (
	<table>
		<tbody>
			<GridHeaders headers={gridHeaders}/>
			<GridRows rows={gridRows}/>
		</tbody>
	</table>
)

export default Grid;
