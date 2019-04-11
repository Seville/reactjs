import React from 'react';
import GridHeaders from './gridHeaders';
import GridRows from './gridRows';

const Grid = ({gridHeaders, gridRows}) => (
	<table>
		<tbody>
			<GridHeaders headers={ gridHeaders }/>
			<GridRows rows={ gridRows }/>
		</tbody>
	</table>
)

export default Grid;
