import React, { Component } from 'react';

export default class Grid extends React.Component {
	render() {
		return <table>
			<tbody>
				<tr>
					<th>First name</th>
					<th>Last name</th>
					<th>Email</th>
					<th>Edit</th>
					<th>Remove</th>
				</tr>
			</tbody>
		</table>
	}
};
